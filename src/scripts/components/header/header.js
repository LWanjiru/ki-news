import React, { Component } from 'react';
import Login from './../login/login';

export default class Header extends Component {
  render() {
    return (
      <div className="top-menu">
        <Login />
        <a href="/">
          <img src="./../../../../public/logo.jpg" alt="page logo" />
          <h1>KI-All News</h1>
        </a>
      </div>
    );
  }
}
