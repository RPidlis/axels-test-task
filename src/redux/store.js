import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { rootSaga, scheduleReducer } from './ducks/schedule';

const rootReducer = combineReducers({
  schedule: scheduleReducer
});

const sagaMiddleware = createSagaMiddleware();

export function configureStore(initialState) {
  const middleware = [sagaMiddleware];
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(...middleware))
  );
  sagaMiddleware.run(rootSaga);
  return store;
}


// const sagaMiddleware = createSagaMiddleware();
//
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//
// const store = createStore(
//   rootReducer,
//   composeEnhancers(applyMiddleware(sagaMiddleware))
// );
//
// sagaMiddleware.run(rootSaga);
//
// window.__store__ = store;
//
// export { store };
