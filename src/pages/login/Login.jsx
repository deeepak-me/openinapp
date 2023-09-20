import React from "react";
import LoginComponent from "../../components/login/LoginComponent";

import Github from "../../images/github.svg"
import Twitter from "../../images/twitter.svg"
import Linkedin from "../../images/linkedin.svg"
import Discord from "../../images/discord.svg"

import "./login.scss";
import Shape from "../../components/shape/Shape";

const Login = () => {
  return (
    <div className="login">
      <div className="left">
        <div className="top">
          <span className="logo">LOGO</span>
        </div>
        <div className="center">
          <h2 className="title">Board.</h2>
        </div>
        <div className="bottom">
          <div className="social">
            <img src={Github}/>
            <img src={Twitter}/>
            <img src={Linkedin}/>
            <img src={Discord}/>
          </div>
        </div>
        <Shape />
      </div>
      <div className="right">
        <LoginComponent />
      </div>
    </div>
  );
};

export default Login;
