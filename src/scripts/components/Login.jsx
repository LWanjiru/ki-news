import React, { Component } from 'react';
import { GoogleLogin } from 'react-google-login-component';

export default class Login extends Component {
 // generate a token when a user signs in
 constructor(props, context) {
   super(props, context);
 }

  responseGoogle() {
    const idToken = this.googleUser.getAuthResponse().idToken;
    console.log(idToken);
  }
  render() {
    return (
      <div className="login-button">
        <GoogleLogin
          socialId="1054136645395-cf4o0i0er8treqp01til7t28a7ngcqg9.apps.googleusercontent.com"
          class="btn btn-danger"
          scope="profile"
          responseHandler={this.responseGoogle}
          buttonText="Login with Google+"
        />
      </div>
    );
  }
}
