import { legacy_createStore as createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const initial = {
  search: [],
  images: [],
  news: [],
  readingLists: [],
  isLoading: true,
};

function reducer(state = initial, action) {
  switch (action.type) {
    case "getSearch":
      return { ...state, search: action.payload };
    case "getImages":
      return { ...state, images: action.payload };
    case "getNews":
      return { ...state, news: action.payload };
    case "getReadingLists":
      return { ...state, readingLists: action.payload };
    case "loading":
      return { ...state, isLoading: action.payload };
    default:
      return state;
  }
}

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
