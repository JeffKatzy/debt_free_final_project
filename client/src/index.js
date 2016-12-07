import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './ducks'
import { setInitial } from './ducks/userAccess.js'
import App from './containers/App.js';
import { composeWithDevTools } from 'redux-devtools-extension';
import '../public/css/table.css';


const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

store.dispatch(setInitial())

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
