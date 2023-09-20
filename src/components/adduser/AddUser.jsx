import React, { useState } from "react";
import "./adduser.scss";

import Controls from "../../images/controls.svg";
import AddProfile from "../addprofile/AddProfile";

const AddUser = ({ onClick }) => {
  // const [open,setOpen] = useState(false)

  return (
    <div className="adduser" onClick={() => onClick()}>
      <div className="items">
        <div className="control">
          <img src={Controls} />
        </div>
        <h2>Add Profile</h2>
      </div>
      {/* {open && <AddProfile setOpen={setOpen} />} */}
    </div>
  );
};

export default AddUser;
