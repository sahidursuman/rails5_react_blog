import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
  render() {
    return (
      <nav>
        <div className="black nav-wrapper">
          <a href="#" className="brand-logo">Blog</a>
          <ul className="right hide-on-med-and-down">
            <li><a href="#">Admin</a></li>
            <li><a href="#">Posts</a></li>
          </ul>
        </div>
      </nav>
    );
  }
}


