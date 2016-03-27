import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
// import { ping } from '../enhancers/ping';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';

export default function configureStore(initialState) {
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk, createLogger())
  )

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').rootReducer;
      console.log(nextRootReducer);
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
