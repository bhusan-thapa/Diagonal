import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import './index.css';
import Main from './Main';

const store = createStore(reducers);
ReactDOM.render(
  <Provider store={store}>
    <Main />
  </Provider>,
  document.querySelector('#root')
);
