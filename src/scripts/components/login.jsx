import React, { Component } from 'react';
import { render } from 'react-dom';

export default class Login extends Component {
  render() {
    return (
      <div>
        <div><img src="../../public/images/logo.jpg"/>></div>
        <div><h1>KI-All News</h1></div>
        <div>
          <p>
            Welcome to the Know It All news website, 
            and be informed on what is happening around the world.
            To continue to the News page, please Login below.
          </p>
          <p> add this line to test</p>
        </div>
        <div><button>Signin with Google+</button></div>
      </div>
    );
  }
}
