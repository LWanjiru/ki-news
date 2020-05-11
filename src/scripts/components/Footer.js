import React from 'react';

const Footer = () => {
  function getYear() {
    let dateNow = new Date();
    let thisYear = dateNow.getFullYear();
    return thisYear;
  }

  return (
    <div className="col text-white">
      <p>Made with &#x2764;, React, Webpack & Bootstrap</p>
      <p>&#169; {getYear()}</p>
    </div>
  );
};

export default Footer;
