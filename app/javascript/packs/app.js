import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Component } from 'react';

//ADMIN
import PostsAdminShow from './components/admin/posts/show';
import PostsAdminIndex from './components/admin/posts/index';
import PostsAdminNew from './components/admin/posts/new';

//FRONT
import PostsShow from './components/front/posts/show';
import PostsIndex from './components/front/posts/index';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter >
        <Switch>
          <Route path="/admin/posts/new" component={PostsAdminNew} />
          <Route path="/admin/posts/:id" component={PostsAdminShow}/>
          <Route path="/admin/posts" component={PostsAdminIndex}/>

          <Route path="/posts/:id" component={PostsShow}/>
          <Route path="/" component={PostsIndex}/>
        </Switch> 
      </BrowserRouter>
    )
  }
}
