import React from 'react';
// import Login from './Login';

const Header = () => {
  const header = 'KI-All News';
  const imgWidth = 40;
  return (
    <nav className="navbar navbar-toggleable-md fixed-top" style={{ backgroundColor: 'black' }}>
      <a className="navbar-brand col-12" href="/">
        <div className="row" >
          <div className="col-2 col-lg-1 mr-0 pr-0">
            <img
              src="./../../../../public/logo.jpg"
              width={imgWidth}
              className="card-inline-block align-top"
              alt="page logo"
            />
          </div>
          <div className="col-2 my-auto m-1 text-white ml-lg-0 pl-lg-0">{header}</div>
        </div>
      </a>
    </nav>
  );
};

export default Header;
