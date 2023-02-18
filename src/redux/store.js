import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import favoritesReducer from './reducer';

const composeEnhancers =  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
const enhancer = composeEnhancers(
        applyMiddleware(thunk),
        // other store enhancers if any
      );

const store = createStore(favoritesReducer, enhancer);


export default store;
