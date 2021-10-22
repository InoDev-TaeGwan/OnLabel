import React from "react";

const Items = ({ title, company, companyEn, companyImg, text }) => {
  return (
    <div className="itemBox">
      <div className="contentBox">
        <span className="title">{title}</span>
        <span className="companyName">{company}</span>
        <span className="contentText">{text}</span>
      </div>
      <div className="partnerImage">
        <span className="imageTitle">{`${companyEn}’S GLOBAL NETWORK`}</span>
        <img src={companyImg} alt="company" width="100%" />
      </div>
    </div>
  );
};

export default Items;
