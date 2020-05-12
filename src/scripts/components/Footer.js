import React from 'react';

const Footer = () => {
  function getYear() {
    const dateNow = new Date();
    const thisYear = dateNow.getFullYear();
    return thisYear;
  }

  return (
    <div className="col text-white">
      <p>Made with &#x2764;, React, Webpack & Bootstrap</p>
      <p>Know It All(KI-ALL) News</p>
      <p>&#169; {getYear()}</p>

    </div>
  );
};

export default Footer;
