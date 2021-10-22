import React from "react";

const Items = ({ reverse, title, subTitle, video }) => {
  return (
    <div className="itemBox">
      {reverse ? (
        <>
          <div className="contentBox reverse">
            <span className="title">{title}</span>
            <span className="subTitle">{subTitle}</span>
          </div>
          <div className="video">
            <video autoPlay loop>
              <source src={video} />
            </video>
          </div>
        </>
      ) : (
        <>
          <div className="video">
            <video autoPlay loop>
              <source src={video} />
            </video>
          </div>
          <div className="contentBox">
            <span className="title">{title}</span>
            <span className="subTitle">{subTitle}</span>
          </div>
        </>
      )}
    </div>
  );
};

export default Items;
