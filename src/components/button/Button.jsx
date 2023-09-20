import React from "react";
import "./button.scss";

const Button = ({ onClick }) => {
  return (
    <div className="buttonwrap" onClick={() => onClick()}>
      <div className="button">Next</div>
    </div>
  );
};

export default Button;
