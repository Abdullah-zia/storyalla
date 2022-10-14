import React, { Fragment } from "react";
import "./Header.css";
import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <Fragment>
      <section className="container-fluid">
        <div className="col-11 mx-auto max-width">
          <div className="headerWrapper">
            <a href="/">
              <img src={logo} className="img-fluid headerLogo" alt="logo" />
            </a>
            <div className="headerNavWrap">
              <a href="/" className="profileImg">
                A
              </a>
              <span className="username">Abdullah</span>
              <a href="/" className="headerBtn">
                LOGOUT
              </a>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Header;
