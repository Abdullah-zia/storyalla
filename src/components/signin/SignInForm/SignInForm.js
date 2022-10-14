import React, { Fragment } from "react";
import "./SignInForm.css";

const SignInForm = () => {
  return (
    <Fragment>
      <form className="formWrapper">
        <div className="text-center">
          <span className="formLock">
            <i className="fa fa-lock" aria-hidden="true"></i>
          </span>
        </div>
        <h1 className="signupHead">sign In</h1>
        <div className="my-2">
          <input
            type="email"
            className="UpemailInput"
            placeholder="Email Address*"
          />
        </div>
        <div className="my-2">
          <input
            type="password"
            className="UpemailInput"
            placeholder="Password*"
          />
        </div>
        <a href="/" className="signupBtn">
          Sign In
        </a>
        <a href="/" className="signupBtn2">
          <i class="fa fa-google" aria-hidden="true"></i> Google Sign in
        </a>
        <a href="/" className="haveAccount">
          Don't have an account? signup
        </a>
      </form>
    </Fragment>
  );
};

export default SignInForm;
