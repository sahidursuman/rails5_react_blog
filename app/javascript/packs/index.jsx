import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { browserHistory, HashRouter, BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';

import App from './app';
import Navbar from './container/navbar';
import Footer from './container/footer';

import reducers from './reducers';
import PostsShow from './components/posts_show';
import PostsIndex from './components/posts_index';
import PostsNew from './components/posts_new';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <div>
      <Navbar></Navbar>
        <App></App>
      <Footer></Footer>
    </div>
  </Provider>
  , document.querySelector('.app'));
