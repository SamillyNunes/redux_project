import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga';

import rootReducer from "./root-reducer";
import rootSaga from "./root-saga";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: rootReducer,
    middleware: ()=> [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);