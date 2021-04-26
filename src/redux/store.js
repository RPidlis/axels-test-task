import { applyMiddleware, compose, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootSaga from '../redux/sagas'
import rootReducer from '../redux/reducers'

const sagaMiddleware = createSagaMiddleware()
const middlewares = [sagaMiddleware];

const composeEnhancers =
    typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        })
        : compose;
const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(...middlewares)))

sagaMiddleware.run(rootSaga);
export {store}
