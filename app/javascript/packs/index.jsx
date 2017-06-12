import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import reducers from './reducers';

import App from './app';
import Navbar from './container/navbar';
import Footer from './container/footer';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <div>
      <Navbar></Navbar>
      <main>
        <div className="full-width">
          <App></App>
        </div>
      </main>
    </div>
  </Provider>
  , document.querySelector('.app'));
