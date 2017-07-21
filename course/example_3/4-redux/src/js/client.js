import { combineReducers, createStore } from 'redux';

const defaultObject = {};

const defaultArray = [];

const userReducer = (state=defaultObject, action) => {
  switch(action.type) {
    case "CHANGE_NAME": {
      state = {...state, name: action.payload}
      break;
    }
    case "CHANGE_AGE": {
      state = {...state, age: action.payload}
      break;
    }
  }
  return state;
};

const tweetsReducer = (state=defaultArray, action) => {
  return state;
};

const reducers = combineReducers({
  user: userReducer,
  tweets: tweetsReducer
});

// const store = createStore(reducers, {
//   user: {
//     name: "Will",
//     age: 35
//   },
//   tweets: []
// });

const store = createStore(reducers);

store.subscribe(() => {
  console.log("store changed", store.getState())
});

/* The action have to have a "type" into it */

store.dispatch({
  type: "CHANGE_NAME",
  payload: "Will"
});

store.dispatch({
  type: "CHANGE_AGE",
  payload: "35"
});

store.dispatch({
  type: "CHANGE_NAME",
  payload: "Francisco"
});

store.dispatch({
  type: "CHANGE_AGE",
  payload: "27"
});
