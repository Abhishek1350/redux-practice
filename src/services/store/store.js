import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../reducer/rootReducer";
import createSagaMiddleware from "redux-saga";
import todoSaga from "../saga/saga";

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
    reducer: rootReducer,
    middleware: () => [sagaMiddleware]

})

sagaMiddleware.run(todoSaga);

export default store;
