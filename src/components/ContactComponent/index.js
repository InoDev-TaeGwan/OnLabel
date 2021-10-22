import React from "react";

import personIcon from "assets/icons/person.svg";
import mailIcon from "assets/icons/mail.svg";

const ContactComponent = () => {
  return (
    <div className="contactContainer wrap">
      <span className="title">CONTACT US</span>
      <div className="formContainer">
        <div className="inputContainer">
          <div className="left">
            <div className="mb_50">
              <span className="label">YOUR NAME</span>
              <div className="p_relative">
                <input type="text" placeholder="YOUR NAME" />
                <img src={personIcon} alt="userIcon" />
              </div>
            </div>
            <div>
              <span className="label">E-MAIL</span>
              <div className="p_relative">
                <input type="text" placeholder="E-MAIL" />
                <img src={mailIcon} alt="userIcon" />
              </div>
            </div>
          </div>
          <div className="right">
            <span className="label">MESSAGE</span>
            <textarea placeholder="WRITE YOUR MESSAGE HERE" />
          </div>
        </div>
        <button className="sendbtn">Send Message</button>
      </div>
    </div>
  );
};

export default ContactComponent;
