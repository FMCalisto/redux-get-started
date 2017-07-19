/*
 * React Counter Example.
 *
 * @author: Francisco Maria Calisto
 *
 */

const counter = (state = 0, action) => {

    switch (action.type) {

        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;

    }

}

const Counter = ({
    
    value,
    onIncrement,
    onDecrement

    }) => (

    <div>
        <h1>{value}</h1>
        <button onClick={onIncrement}>+</buttons>
        <button onClick={onDecrement}>-</buttons>
    </div>

);

const { createStore } = Redux;
const store = createStore(counter);

const render = () => {

    ReactDOM.render(

        <Counter
            value={store.getState()}
            onIncrement={() =>
                store.dispatch({
                    type: 'INCREMENT'
                })
            }
            onDecrement={() =>
                store.dispatch({
                    type: 'DECREMENT'
                })
            }
        />,
        document.getElementById('root')

    );

};

store.subscribe(render);
render();
