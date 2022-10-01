import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import unitsSaga from "./unitsSaga";
import createSagaMiddleware from "@redux-saga/core";

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: rootReducer,
  middleware: () => [sagaMiddleware],
});

sagaMiddleware.run(unitsSaga);

export default store;
