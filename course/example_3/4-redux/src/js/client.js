import { createStore } from 'redux';

const reducer = (initialState = 0, action) => {

}

const store = createStore(reducer, 1);

/* The action have to have a "type" into it */

store.dispatch({
  type: "INC"
});

store.dispatch({
  type: "INC"
});

store.dispatch({
  type: "INC"
});

store.dispatch({
  type: "DEC"
});

store.dispatch({
  type: "DEC"
});

store.dispatch({
  type: "DEC"
});
