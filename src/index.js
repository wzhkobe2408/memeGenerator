import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import App from './components/App';

import { fetchMemes } from './actions';

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

store.subscribe(() => console.log('store',store.getState()));
store.dispatch(fetchMemes());

ReactDOM.render(
  <Provider store = {store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
