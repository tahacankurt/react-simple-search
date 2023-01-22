import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from 'redux-saga'

import customerReducer from './redux/reducer'
import customerSaga from "./redux/sagas";

const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
  customer: customerReducer
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(customerSaga);

export default store;
