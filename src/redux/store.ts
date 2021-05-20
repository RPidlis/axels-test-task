import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { rootSaga, scheduleReducer } from './ducks/schedule';

const rootReducer = combineReducers({
  schedule: scheduleReducer
});

const sagaMiddleware = createSagaMiddleware();

export function configureStore(initialState?: AppStateType) {
  const middleware = [sagaMiddleware];
  const composeEnhancers =
// @ts-ignore
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(...middleware))
  );
  sagaMiddleware.run(rootSaga);
  return store;
}

export const store = configureStore()

type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>
