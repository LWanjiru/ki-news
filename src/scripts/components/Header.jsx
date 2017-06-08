import React, { Component } from 'react';
import Login from './Login.jsx';

export default class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-toggleable-md navbar-inverse bg-inverse fixed-top">
        <div className="navbar-toggler-right">
          <span><Login /></span>
        </div>
        <a className="navbar-brand" href="/">
          <img src="./../../../../public/logo.jpg" width="30" height="30" className="card-inline-block align-top" alt="page logo" /><br />
          KI-All News
        </a>
      </nav>
    );
  }
}
