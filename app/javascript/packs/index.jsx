import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { browserHistory, HashRouter, BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';

import reducers from './reducers';
import PostsShow from './components/posts_show';
import PostsIndex from './components/posts_index';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter >
      <div>
        {/* <Switch>*/}
          <Route path="/" component={PostsIndex} />
          <Route path="/posts/:id" component={PostsShow} />
        {/* </Switch>*/}
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.app'));
