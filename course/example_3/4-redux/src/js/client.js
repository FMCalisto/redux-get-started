import { applyMiddleware, createStore } from 'redux';

const reducer = (initialState = 0, action) => {
  if (action.type === "INC") {
    return initialState + 1;
  } else if (action.type === "DEC") {
    return initialState - 1;
  } else if (action.type === "ERROR") {
    throw new Error("Error!");
  }
  return initialState;
}

const logger = (store) => (next) => (action) => {
  console.log("action fired", action);
  next(action);
}

const error = (store) => (next) => (action) => {
  try {
    next(action);
  } catch(e) {
    console.log("Problem...", e);
  }
}

const middleware = applyMiddleware(logger);

const store = createStore(reducer, 1, middleware);

store.subscribe(() => {
  console.log("store change", store.getState())
})

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

store.dispatch({
  type: "ERROR"
});
