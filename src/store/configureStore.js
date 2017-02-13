import { createStore, applyMiddleware } from 'redux';
import { hashHistory } from 'react-router'
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'react-router-redux';

import rootReducer from '../reducers';
// import { ping } from '../enhancers/ping';
// import { redirect } from '../enhancers/redirect';
import rootSaga from '../sagas';

const routingMiddleware = routerMiddleware(hashHistory);
const sagaMiddleware = createSagaMiddleware(rootSaga)

let middlewawres = [
  routingMiddleware,
  thunk,
  sagaMiddleware
]
if(process.env.IS_DEVELOP) {
  // const createLogger = require('redux-logger');
  // middlewawres.push(createLogger())
}

function configureStore(initialState) {

  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middlewawres)
  )

  // Extensions
  store.runSaga = sagaMiddleware.run;


  if (process.env.IS_DEVELOP && module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers')
      store.replaceReducer(nextRootReducer)
    })
  }

  return store;
}

const store = configureStore();

export default store;