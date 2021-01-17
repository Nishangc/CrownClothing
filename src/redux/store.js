import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
// import thunk from "redux-thunk";
import rootReducer from "./Root-reducer";
// import { composeWithDevTools } from "redux-devtools-extension";
const middlewares = [logger];
// const middleware = [thunk];

const store = createStore(
  rootReducer,
  applyMiddleware(...middlewares)
  //   composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
