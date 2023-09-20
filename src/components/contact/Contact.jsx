import React, { useState } from "react";
import "./contact.scss";

const Contact = ({ onChange }) => {
  const [post, setPost] = useState({
    instagram: "",
    youtube: "",
  });

  const handleInput = (event) => {
    setPost({ ...post, [event.target.name]: event.target.value });

    onChange({ ...post });
  };

  return (
    <div className="contact">
      <div className="firstSeg">
        <div className="forms">
          <p className="heading">
            Instagram Link <span>(Optional) </span>{" "}
          </p>
          <input
            type="text"
            placeholder="Eg. ..instagram.com/username"
            className="inputs"
            onChange={handleInput}
            name="instagram"
          />
        </div>
        <div className="forms">
          <p className="heading">
            Youtube Link <span>(Optional)</span>
          </p>
          <input
            type="link"
            placeholder="Eg. ..youtebe/username"
            className="inputs"
            onChange={handleInput}
            name="youtube"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
