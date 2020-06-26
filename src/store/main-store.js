import { createStore } from "redux";
import taskReducer from "./reducers/reducers";

const store = createStore(
 taskReducer,
 //  initialState, // optional
 //  applyMiddleware(
 //   triggerAlias, // optional, see below
 //   forwardToRenderer // IMPORTANT! This goes last
 //  ),
 window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
