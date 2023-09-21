import React, { useState } from "react";
import "./adduser.scss";

import Controls from "../../images/controls.svg";

const AddUser = ({ onClick }) => {
  return (
    <div className="adduser" onClick={() => onClick()}>
      <div className="items">
        <div className="control">
          <img src={Controls} />
        </div>
        <h2>Add Profile</h2>
      </div>
    </div>
  );
};

export default AddUser;
