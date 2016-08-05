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

const createStore = (render) => {

    let state;
    let listeners = [];

    const getSate = () => state;

    const dispatch = (action) => {

        state = reducer(state, action);

        listeners.forEach(listener => listener());

    };

    const subscribe = (listener) => {

        listeners.push(listener);

        return () => {

            listeners = listeners.filter(l => l !== listener);

        };

    };

    dispatch({});

    return {

        getState,
        dispatch,
        subscribe
    };

};

const { createStore } = Redux;
const store = createStore(counter);

const render = () => {

    

};

store.subscribe(render);
render();
