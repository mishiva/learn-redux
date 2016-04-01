import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
// import { ping } from '../enhancers/ping';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import { watchFriendsRequest } from '../sagas';

export default function configureStore(initialState) {
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(
      thunk,
      createLogger(),
      createSagaMiddleware(watchFriendsRequest)
    )
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
