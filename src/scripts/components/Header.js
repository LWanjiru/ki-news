import React from 'react';
import Login from './Login';

const Header = () => {
  const header = 'KI-All News';
  return (
    <nav className="navbar navbar-toggleable-md navbar-inverse bg-inverse fixed-top">
      <div className="navbar-toggler-right">
        <Login />
      </div>
      <a className="navbar-brand" href="/">
        <img
          src="./../../../../public/logo.jpg"
          width="20"
          height="20"
          className="card-inline-block align-top"
          alt="page logo"
        />
        <strong>{header}</strong>
      </a>
      <a className="nav-item nav-link" href="/">Home</a>
      <a className="nav-item nav-link" href="">View</a>
    </nav>
  );
};

export default Header;
