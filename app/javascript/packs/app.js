import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { browserHistory, HashRouter, BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';
import React, { Component } from 'react';

import reducers from './reducers';
import PostsShow from './components/posts_show';
import PostsIndex from './components/posts_index';
import PostsNew from './components/posts_new';


export default class App extends Component {
  render() {
    return (
      <BrowserRouter >
        <Switch>
          <Route path="/posts/new" component={PostsNew} />
          <Route path="/posts/:id" component={PostsShow}/>
          <Route path="/" component={PostsIndex}/>
        </Switch> 
      </BrowserRouter>
    )
  }
}
