import React from 'react';
// import Login from './Login';

const Header = () => {
  const header = 'KI-All News';
  const imgWidth = 60;
  return (
    <nav className="navbar navbar-toggleable-md navbar-inverse bg-inverse fixed-top">
      <a className="navbar-brand" href="/">
        <div className="row">
          <div className="col-2 col-lg-4">
            <img
              src="./../../../../public/logo.jpg"
              width={imgWidth}
              className="card-inline-block align-top"
              alt="page logo"
            />
          </div>
          <div className="col-2 col-lg-6 my-auto ">{header}</div>
        </div>
      </a>
    </nav>
  );
};

export default Header;
