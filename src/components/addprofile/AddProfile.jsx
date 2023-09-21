import React, { useEffect, useState } from "react";
import "./AddProfile.scss";

import CloseIcon from "../../images/close.svg";
import Button from "../button/Button";
import Basic from "../basic/Basic";
import Contact from "../contact/Contact";

const AddProfile = ({ onSubmit, ...props }) => {
  const [currentState, setCurrentState] = useState(1);

  const totalStates = 2;

  const nextButtonClick = () => {
    if (currentState < totalStates) {
      setCurrentState(currentState + 1);
    }
  };

  const backButtonClick = () => {
    if (currentState <= totalStates) {
      setCurrentState(currentState - 1);
    }
  };

  useEffect(() => {
    const rootEl = document.querySelector("#app");

    if (!rootEl) {
      return;
    }

    rootEl.style = "height: 100vh; overflow: hidden;";

    return () => {
      rootEl.style = "";
    };
  }, []);

  const [profile, setProfile] = useState({});

  function handleFormChange(partialForm) {
    setProfile({ ...profile, ...partialForm });
  }

  return (
    <div className="addprofile">
      <div className="add">
        <div className="top">
          <h3 className="title">Add New Profile</h3>
          <img
            src={CloseIcon}
            onClick={() => props.onClose()}
            style={{ cursor: "pointer" }}
          />
        </div>

        <div className="segments">
          <div className="sub">
            <h4 className="segement">Basic</h4>

            <div
              className={`underline ${
                currentState === 1 ? "underline--active" : "underline--inactive"
              }`}
            ></div>
          </div>
          <div className="sub">
            <h4 className="segement">Contact</h4>
            <div
              className={`underline ${
                currentState === 2 ? "underline--active" : "underline--inactive"
              }`}
            ></div>
          </div>
        </div>

        <div className="inputfrm">
          {currentState === 1 && <Basic onChange={handleFormChange} />}
          {currentState === 2 && <Contact onChange={handleFormChange} />}
        </div>

        {currentState < totalStates ? (
          <Button onClick={nextButtonClick}>Next</Button>
        ) : (
          <div className="btn-wrap">
            <Button className="secondary" onClick={backButtonClick}>
              Back
            </Button>
            <Button onClick={() => onSubmit({ ...profile })}>Done</Button>
          </div>
        )}

        {/* <Button /> */}
      </div>
    </div>
  );
};

export default AddProfile;
