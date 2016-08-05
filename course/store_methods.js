/*
 * Store Methods.
 *
 * @author: Francisco Maria Calisto
 *
 */

const counter = (state = 0, saction) => {

    switch (action.type) {

        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;

    }

}

const { createStore } = Redux;

const store = createStore(counter);

console.log(store.getState());

store.dispatch({ type: 'INCREMENT' });

console.log(store.getState());
