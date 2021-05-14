import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootSaga from '../redux/ducks/schedule';
import { scheduleReducer } from './ducks/schedule';

const rootReducer = combineReducers({
  schedule: scheduleReducer
});

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

window.__store__ = store;

export { store };
