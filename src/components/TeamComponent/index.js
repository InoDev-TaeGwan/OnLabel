import React from "react";
import Profile from "shared/Profile";

const TeamComponent = () => {
  return (
    <div className="teamAContainer wrap">
      <span className="title">TEAM</span>
      <div className="profileBox">
        <Profile />
        <Profile />
        <Profile />

        <Profile />
        <Profile />
        <Profile />

        <Profile />
        <Profile />
        <Profile />
      </div>
    </div>
  );
};

export default TeamComponent;
