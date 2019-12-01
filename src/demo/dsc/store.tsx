import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";
import { addTodoEpic } from "./epics";
import { combineEpics, createEpicMiddleware } from "redux-observable";

const rootEpic = combineEpics(addTodoEpic);
const epicMiddleware = createEpicMiddleware();
export default createStore(rootReducer, applyMiddleware(epicMiddleware));
epicMiddleware.run(rootEpic);
