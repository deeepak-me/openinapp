import React from "react";
import "./userCard.scss";

import WhatsApp from "../../images/whatsapp.svg";
import YouTube from "../../images/youtube.svg";
import Mail from "../../images/Mail.svg";
import Instagram from "../../images/instagram.svg";

const UserCard = ({ currUsers }) => {
  return (
    <div className="userCard">
      {currUsers.map((user) => (
        <div className="user">
          <h2 className="title">{user.name}</h2>
          <div className="info">
            <div className="segment">
              <div className="content">
                <div className="icon whatsapp">
                  <img src={WhatsApp} />
                </div>
                <h4 className="subtitle">{user.phone}</h4>
              </div>
              <div className="content">
                <div className="icon mail">
                  <img src={Mail} />
                </div>
                <h4 className="subtitle">{user.email}</h4>
              </div>
            </div>
            <div className="segment">
              <div className="content">
                <div className="icon insta">
                  <img src={Instagram} />
                </div>
                <h4 className="subtitle">{user.instagram}</h4>
              </div>
              <div className="content">
                <div className="icon youtube">
                  <img src={YouTube} />
                </div>
                <h4 className="subtitle">{user.youtube}</h4>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserCard;
