import React from "react";
import Profile from "shared/Profile";

import {adviserData} from "utils/dumy";

const AdviserComponent = () => {
  return (
    <div className="teamAContainer wrap" id="adviser">
      <span className="title">ADVISER</span>
      <div className="profileBox">
          {adviserData.map((adviser) => (
              <Profile
                  key={adviser.id}
                  name={adviser.name}
                  position={adviser.position}
                  image={adviser.image}
                  profileHistory={adviser.profileHistory}
              />
          ))}
      </div>
    </div>
  );
};

export default AdviserComponent;
