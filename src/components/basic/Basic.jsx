import React, { useEffect, useState } from "react";
import "./basic.scss";
import axios from "axios";

const Basic = ({ onChange }) => {
  const [post, setPost] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const handleInput = (event) => {
    setPost({ ...post, [event.target.name]: event.target.value });

    onChange({ ...post });
  };

  return (
    <div className="basic">
      <div className="firstSeg">
        <div className="forms">
          <p className="heading">Enter Name*</p>
          <input
            type="text"
            placeholder="Deepak Krishnan"
            className="inputs"
            onChange={handleInput}
            name="name"
          />
        </div>
        <div className="forms">
          <p className="heading">Enter Email* </p>
          <input
            type="email"
            placeholder="deepak.krishnan.e@gmail.com"
            className="inputs"
            name="email"
            onChange={handleInput}
          />
        </div>

        <div className="forms">
          <p className="heading">Enter Phone*</p>
          <input
            type="text"
            placeholder="+91 9876543210"
            className="inputs"
            onChange={handleInput}
            name="phone"
          />
        </div>
      </div>
    </div>
  );
};

export default Basic;
