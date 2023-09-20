import React from "react";
import "./loginComponent.scss";

import Google from "../../images/google.svg";
import Apple from "../../images/apple.svg";
import Button from "../button/Button";

const LoginComponent = () => {
  return (
    <div className="loginComponents">
      <h2 className="title">Sign In</h2>
      <p className="subtitle">Sign in to your account</p>

      <div className="accounts">
        <span className="google">
          <img src={Google} />
          <p className="signin">Sign in with Google</p>
        </span>
        <span className="google">
          <img src={Apple} />
          <p className="signin">Sign in with Apple</p>
        </span>
      </div>
      <div className="inputs">
        <div className="firstSeg">
          <div className="forms">
            <p className="heading">Email address</p>
            <input
              type="email"
              placeholder="johndoe@gmail.com"
              className="inputs"
            />
          </div>
          <div className="forms">
            <p className="heading">Password</p>
            <input type="password" placeholder="" className="inputs" />
          </div>
        </div>
        {/* </div> */}
        <p className="forgot">Forgot password?</p>
        <Button className="btn"/>
      </div>

      <p className="signin">
        Don’t have an account? <span>Register here</span>
      </p>
    </div>
  );
};

export default LoginComponent;
