import React from "react";

import SearchIcon from "../../images/Search.svg";
import Avatar from "../../images/avatar.png";
import Notification from "../../images/notification.svg";

import "./Navbar.scss";

const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        <div className="wrapper">
          <div className="title">Dashboard</div>
          <div className="items">
            <div className="search item">
              <input type="text" placeholder="Search..." />
              <img src={SearchIcon} className="icon" />
              {/* <SearchOutlinedIcon /> */}
            </div>
            <div className="item">
              {/* <NotificationsNoneOutlinedIcon className="icon" /> */}
              <img src={Notification} className="icon" />
            </div>

            <div className="item">
              <img src={Avatar} alt="" className="avatar" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
