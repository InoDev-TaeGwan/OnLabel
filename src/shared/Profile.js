import React, { memo } from "react";

const Profile = memo(({ name, position, image, profileHistory }) => {
  console.log(profileHistory);
  return (
    <div className="profile">
      <div className="nameImage">
        <div>
          <span className="name">{name}</span>
          <span className="position">{position}</span>
        </div>
        <div className="profileImage">
          <img src={image} alt="profileImage" width="100%" />
        </div>
      </div>
      <div className="profileHistory">
        {/*{profileHistory.map((history, index) => (*/}
        {/*  <span key={index}>{history}</span>*/}
        {/*))}*/}
        {profileHistory}
      </div>
    </div>
  );
});

export default Profile;
