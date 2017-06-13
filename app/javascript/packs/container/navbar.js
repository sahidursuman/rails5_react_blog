import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
  render() {
    return (
      <nav>
        <div className="black nav-wrapper">
          <Link className="brand-logo" to={`/posts/`}>Blog</Link>
          <ul className="hide-on-med-and-down" style={{marginLeft: 70 + 'px'}}>
            <li><Link to={`/admin/posts`}>Admin</Link></li>
          </ul>
          <ul className="right hide-on-med-and-down">
            <li><Link to={`/posts/`}>Posts</Link></li>
            <li><a href="#">login</a></li>
            <li><a href="#">logout</a></li>
            <li><a href="#">profil</a></li>
          </ul>
        </div>
      </nav>
    );
  }
}


