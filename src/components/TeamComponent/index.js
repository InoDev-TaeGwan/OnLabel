import React from "react";
import Profile from "shared/Profile";

import { partnerData } from "utils/dumy.js";

const TeamComponent = () => {
    // const screenMobile = window.matchMedia("screen and (max-width: 768px)");
    // const data = partnerData;
    // const dataResult = [];
    // for(let i = 0; i < data.length; i += 4) dataResult.push(data.slice(i, i + 4));
    // console.log(dataResult)
  return (
    <div className="teamAContainer wrap" id="team">
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
