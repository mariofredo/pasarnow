import { legacy_createStore as createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const initial = {
  search: [],
  isLoading: true,
};

function reducer(state = initial, action) {
  switch (action.type) {
    case "getSearch":
      return { ...state, search: action.payload };
    case "loading":
      return { ...state, isLoading: action.payload };
    default:
      return state;
  }
}

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
