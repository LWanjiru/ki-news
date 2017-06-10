import React, { Component } from 'react';
import Login from './Login.jsx';
import Articles from './Articles';

export default class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-toggleable-md navbar-inverse bg-inverse fixed-top">
        <div className="navbar-toggler-right">
          <Login />
        </div>
        <a className="navbar-brand" href="/">
          <img src="./../../../../public/logo.jpg" width="20" height="20" className="card-inline-block align-top" alt="page logo" />
         &nbsp; <strong>KI-All News</strong>
        </a>
        <a className="nav-item nav-link" href="#">Home</a>
        <a className="nav-item nav-link" href={Articles}>View</a>
      </nav>
    );
  }
}
