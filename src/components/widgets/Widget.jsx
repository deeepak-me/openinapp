import React from "react";

import "./widget.scss";


const Widget = (prop) => {
  return (
    <div className="widget">
      <div className="left">
        <span className="icon" style={{background: prop.color}}>
          <img src= {prop.image} />
        </span>
        <span className="title">{prop.title}</span>
        <div className="bottom">
          <span className="number">{prop.link}</span>
        </div>
      </div>
      <div className="right">
        <span className="rate">{prop.rate}</span>
      </div>
    </div>
  );
};

export default Widget;
