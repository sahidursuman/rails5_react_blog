import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Component } from 'react';

import Navbar from './container/navbar';
//ADMIN
import PostsAdminIndex from './components/admin/posts/index';
import PostsAdminNew from './components/admin/posts/new';
//FRONT
import PostsShow from './components/front/posts/show';
import PostsIndex from './components/front/posts/index';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter >
        <div>
          <Navbar></Navbar>
          <Switch >

            <Route path="/admin/posts/new" component={PostsAdminNew} />
            <Route path="/admin/posts" component={PostsAdminIndex}/>

            <Route path="/posts/:id" component={PostsShow}/>
            <Route path="/" component={PostsIndex}/>
          </Switch> 
        </div> 
      </BrowserRouter>
    )
  }
}
