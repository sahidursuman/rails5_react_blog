import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Footer extends Component {
  render() {
    return (
      <footer className="page-footer black">
        <div className="full-width">
          <div className="row">
            <div className="col l6 s12">
              <h5 className="white-text">Company Bio</h5>
              <p className="grey-text text-lighten-4">We are a team of college students working on this project like it's our full time job. Any amount would help support and continue development on this project and is greatly appreciated.</p>
            </div>
            <div className="col l3 s12">
              <h5 className="white-text">Settings</h5>
              <ul>
                <li><a className="white-text" href="#!">Link 1</a></li>
                <li><a className="white-text" href="#!">Link 2</a></li>
                <li><a className="white-text" href="#!">Link 3</a></li>
                <li><a className="white-text" href="#!">Link 4</a></li>
              </ul>
            </div>
            <div className="col l3 s12">
              <h5 className="white-text">Connect</h5>
              <ul>
                <li><a className="white-text" href="#!">Link 1</a></li>
                <li><a className="white-text" href="#!">Link 2</a></li>
                <li><a className="white-text" href="#!">Link 3</a></li>
                <li><a className="white-text" href="#!">Link 4</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="full-width">
          Made by <a className="orange-text text-lighten-3" href="http://materializecss.com">Materialize</a>
          </div>
        </div>
      </footer>
    );
  }
}


