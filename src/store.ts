import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import reducer from "./redux/reducers";
import { logMiddleware } from "./redux/middleware/logMiddleware";

const enhancer = applyMiddleware(thunk, logMiddleware);

export default createStore(
    reducer,
    composeWithDevTools(enhancer)
);
