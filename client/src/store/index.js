import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from "./reducer/index";
import thunk from "redux-thunk";

// const store = createStore(
//   reducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
//   applyMiddleware(thunk)
// );

// import rootReducer from "./reducer";

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk))); // thunk nos permite trabajar con asincronismo en el front  export default store;

export default store;
