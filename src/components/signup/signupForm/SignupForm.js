import React from "react";
import "./SignupForm.css";
import { Formik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";

const SignupForm = () => {
  // form data handler
  const signupHandler = (values) => {
    console.log(values);
  };
  return (
    <Formik
      //initial values
      initialValues={{
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        cpassword: "",
      }}
      //validationschema using yup
      validationSchema={Yup.object({
        firstname: Yup.string()
          .required("Required")
          .min(5, "Length Should be greater than 5."),
        lastname: Yup.string()
          .required("Required")
          .min(5, "Length Should be greater than 5."),
        email: Yup.string().required("Required").email("Email is not Valid"),
        password: Yup.string()
          .required("Required")
          .min(6, "Length Should be greater than 6."),
        cpassword: Yup.string()
          .required("Required")
          .oneOf([Yup.ref("password"), null], "Passwords must match"),
      })}
      // form submit handler
      onSubmit={(values, { setSubmitting, resetForm }) => {
        signupHandler(values);
        setSubmitting(false);
        resetForm({ values: "" });
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <>
          <form className="formWrapper" onSubmit={handleSubmit}>
            <div className="text-center">
              <span className="formLock">
                <i className="fa fa-lock" aria-hidden="true"></i>
              </span>
            </div>
            <h1 className="signupHead">sign up</h1>
            <div className="upFormNamesWrapper">
              <div>
                <input
                  type="text"
                  className={`inputName ${
                    errors.firstname && touched.firstname && "is-invalid"
                  }`}
                  placeholder="First Name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="firstname"
                  value={values.firstname}
                />
                <div className="invalid-feedback">
                  {errors.firstname && touched.firstname && errors.firstname}
                </div>
              </div>
              <div>
                <input
                  type="text"
                  className={`inputName ${
                    errors.lastname && touched.lastname && "is-invalid"
                  }`}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.lastname}
                  name="lastname"
                  placeholder="Last Name"
                />
                <div className="invalid-feedback">
                  {errors.lastname && touched.lastname && errors.lastname}
                </div>
              </div>
            </div>
            <div className="my-2">
              <input
                type="email"
                className={`UpemailInput ${
                  errors.email && touched.email && "is-invalid"
                }`}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                name="email"
                placeholder="Email Address*"
              />
              <div className="invalid-feedback">
                {errors.email && touched.email && errors.email}
              </div>
            </div>
            <div className="my-2">
              <input
                type="password"
                className={`UpemailInput ${
                  errors.password && touched.password && "is-invalid"
                }`}
                onChange={handleChange}
                onBlur={handleBlur}
                name="password"
                value={values.password}
                placeholder="Password*"
              />
              <div className="invalid-feedback">
                {errors.password && touched.password && errors.password}
              </div>
            </div>
            <div className="my-2">
              <input
                type="password"
                className={`UpemailInput ${
                  errors.cpassword && touched.cpassword && "is-invalid"
                }`}
                placeholder="Repeat Password*"
                name="cpassword"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.cpassword}
              />
              <div className="invalid-feedback">
                {errors.cpassword && touched.cpassword && errors.cpassword}
              </div>
            </div>
            <button type="submit" disabled={isSubmitting} className="signupBtn">
              Sign Up
            </button>
            <a href="/" className="signupBtn2">
              <i className="fa fa-google" aria-hidden="true"></i> Google Sign in
            </a>
            <Link to="/signin" className="haveAccount">
              Already have an account? signin
            </Link>
          </form>
        </>
      )}
    </Formik>
  );
};

export default SignupForm;
