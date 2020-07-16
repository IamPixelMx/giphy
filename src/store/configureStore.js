import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers';
import rootSaga from './sagas';

const bindMiddleware = middleware => {
  if (process.env.NODE_ENV !== 'production') {
    /* eslint-disable global-require */
    const { composeWithDevTools } = require('redux-devtools-extension');
    const options = {
      /*
       *Here you can add options to implement with redux
       */
    };
    const composeEnhancers = composeWithDevTools(options);
    return composeEnhancers(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

const configureStore = preloadedState => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(rootReducer, preloadedState, bindMiddleware([sagaMiddleware]));
  store.sagaTask = sagaMiddleware.run(rootSaga);
  return store;
};

export default configureStore;
