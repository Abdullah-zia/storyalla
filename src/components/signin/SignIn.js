import React, { Fragment } from "react";
import Header from "../header/Header";
import SignInForm from "./SignInForm/SignInForm";

const SignIn = () => {
  return (
    <Fragment>
      <Header />
      <SignInForm />
    </Fragment>
  );
};

export default SignIn;
