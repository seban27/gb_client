import React from 'react';
import ReactDOM from 'react-dom';
import Main from './app/Main';
import reportWebVitals from './reportWebVitals';

import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import configureStore from './configureStore';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
        <HashRouter>
            <Main />
        </HashRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
