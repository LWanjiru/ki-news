import React, { Component } from 'react';
import { GoogleLogin } from 'react-google-login-component';

export default class Login extends Component {
 // generate a token when a user signs in
  responseGoogle(googleUser) {
    const idToken = googleUser.getAuthResponse();
    console.log(idToken);
    // return (idToken);
  }

  render() {
    return (
      <div className="login-button">
        <GoogleLogin
          socialId="1054136645395-cf4o0i0er8treqp01til7t28a7ngcqg9.apps.googleusercontent.com"
          class="btn btn-danger"
          scope="https://www.googleapis.com/auth/appstate"
          responseHandler={this.responseGoogle}
          buttonText="Login with Google+"
        />
      </div>
    );
  }
}
