import React from "react";
import Profile from "shared/Profile";

import { partnerData } from "utils/dumy.js";

const TeamComponent = () => {
  return (
    <div className="teamAContainer wrap">
      <span className="title">TEAM</span>
      <div className="profileBox">
        {partnerData.map((partner) => (
          <Profile
            key={partner.id}
            name={partner.name}
            position={partner.position}
            image={partner.image}
            profileHistory={partner.profileHistory}
          />
        ))}
      </div>
    </div>
  );
};

export default TeamComponent;
