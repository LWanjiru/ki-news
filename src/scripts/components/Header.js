import React from 'react';
import Login from './Login';

const Header = () => {
  const header = 'KI-All News';
  const imgWidth = 40;
  return (
    <nav className="navbar navbar-toggleable-md navbar-inverse bg-inverse fixed-top">
      <div className="navbar-toggler-right">
        <Login />
      </div>
      <a className="navbar-brand" href="/">
        <img
          src="./../../../../public/logo.jpg"
          width={imgWidth}
          className="card-inline-block align-top"
          alt="page logo"
        />
        <strong>{header}</strong>
      </a>
    </nav>
  );
};

export default Header;
