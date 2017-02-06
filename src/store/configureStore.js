import { createStore, applyMiddleware } from 'redux';
import { browserHistory } from 'react-router'
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'react-router-redux';

import rootReducer from '../reducers';
// import { ping } from '../enhancers/ping';
// import { redirect } from '../enhancers/redirect';
import rootSaga from '../sagas';

const routingMiddleware = routerMiddleware(browserHistory);

function configureStore(initialState) {
  const sagaMiddleware = createSagaMiddleware(rootSaga)

  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(
      routingMiddleware,
      thunk,
      createLogger(),
      sagaMiddleware
      // redirect
    )
  )

  // Extensions
  store.runSaga = sagaMiddleware.run;

  return store;
}

const store = configureStore();

export default store;