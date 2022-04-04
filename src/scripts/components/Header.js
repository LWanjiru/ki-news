import React from 'react';
import logo from '../../../public/transparent-logo.png'


const header = 'KI-All News';
const imgWidth = 60;
const newLocal = <h2><img
  src={logo}
  width={imgWidth}
  className=""
  alt="page logo" /><span className=" ">{header}</span>
</h2>;
const navigate = (<nav className="navbar container-fluid navbar-expand-md fixed-top navbar-dark bg-dark" role="navigation">
  <div className="container-fluid">
    <a className="navbar-brand text-white" href="/">
      {newLocal}
    </a>
  </div>
</nav>);
const Header = () => navigate;

export default Header;
