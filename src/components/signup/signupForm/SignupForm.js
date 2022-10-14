import React, { Fragment } from "react";
import "./SignupForm.css";

const SignupForm = () => {
  return (
    <Fragment>
      <form className="formWrapper">
        <div className="text-center">
          <span className="formLock">
            <i className="fa fa-lock" aria-hidden="true"></i>
          </span>
        </div>
        <h1 className="signupHead">sign up</h1>
        <div className="upFormNamesWrapper">
          <input type="text" className="inputName" placeholder="First Name" />
          <input type="text" className="inputName" placeholder="Last Name" />
        </div>
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
        <div className="my-2">
          <input
            type="password"
            className="UpemailInput"
            placeholder="Repeat Password*"
          />
        </div>
        <a href="/" className="signupBtn">
          Sign Up
        </a>
        <a href="/" className="signupBtn2">
          Google Sign in
        </a>
        <a href="/" className="haveAccount">
          Already have an account? signin
        </a>
      </form>
    </Fragment>
  );
};

export default SignupForm;
