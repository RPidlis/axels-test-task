import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { rootSaga, scheduleReducer } from './ducks/schedule';

export const rootReducer = combineReducers({
  schedule: scheduleReducer
});

const sagaMiddleware = createSagaMiddleware();

export function configureStore<AppStateType>() {
  const middleware = [sagaMiddleware];
  const composeEnhancers =
// @ts-ignore
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
    rootReducer,
    undefined,
    composeEnhancers(applyMiddleware(...middleware))
  );
  sagaMiddleware.run(rootSaga);
  return store;
}

export const store = configureStore()

type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>
