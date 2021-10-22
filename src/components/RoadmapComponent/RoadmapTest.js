import React from "react";

import "./test.css";

const RoadmapComponent = () => {
  return (
    <div className="roadmapContainer">
      <span className="title">ROADMAP</span>
      <ul className="timeline">
        <li>
          <div>
            <time dateTime="2018-10-09">October 9, 2018</time>
            <p>description event #1</p>
          </div>
        </li>
        <li>
          <div>
            <time dateTime="2018-10-09">October 9, 2018</time>
            <p>description event #2</p>
          </div>
        </li>
        <li>
          <div>
            <time dateTime="2018-10-09">October 9, 2018</time>
            <p>description event #3</p>
          </div>
        </li>
        <li>
          <div>
            <time dateTime="2018-10-09">October 9, 2018</time>
            <p>description event #4</p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default RoadmapComponent;
