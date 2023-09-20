import React from "react";
import "./button.scss";

const Button = ({ onClick , children,...rest}) => {
  return (
    <div className="buttonwrap" onClick={() => onClick()} {...rest}>
      <div className="button">{children}</div>
    </div>
  );
};

export default Button;
