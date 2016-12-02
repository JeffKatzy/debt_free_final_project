import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { setInitial } from './ducks/period.js'
import thunk from 'redux-thunk'
import rootReducer from './ducks'
import App from './containers/App.js';
import './index.css';
import { composeWithDevTools } from 'redux-devtools-extension';


const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

store.dispatch(setInitial())

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
