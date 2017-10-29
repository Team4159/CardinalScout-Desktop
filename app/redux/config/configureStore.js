import { createStore } from 'redux';
import rootReducer from '../reducers';
export default function configureStore(preLoadedState){
  /* eslint-disable no-undef */
  const store = createStore(rootReducer, preLoadedState ,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
  if(module.hot){
    module.hot.accept(() => {
      const nextRootReducer = require('../reducers/index').default;
      store.replaceReducer(nextRootReducer);
    });
  }
  return store;
}