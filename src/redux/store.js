import { applyMiddleware, compose, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'

import rootReducer from '../redux/reducers'
import rootSaga from '../redux/sagas'

const sagaMiddleware = createSagaMiddleware()
const middlewares = [sagaMiddleware];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(...middlewares)))

sagaMiddleware.run(rootSaga);
window.__store__ = store
export {store}
