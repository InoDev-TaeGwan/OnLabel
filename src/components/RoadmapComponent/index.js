import React from "react";
// import RoadmapTest from "./RoadmapTest";

import roadMap from 'assets/images/roadMap.png';

const RoadmapComponent = () => {
  return (
    <>
      <div className="roadmapContainer">
        <span className="title">ROADMAP</span>
          <img src={roadMap} alt="roadMapImg" width="100%" />

          {/*<div className="p_relative roadmap">*/}
        {/*  <div className="roadmapLine" />*/}
        {/*  <div className="roadmapItem one">*/}
        {/*    <span className="year">2021Y 4Q</span>*/}
        {/*    <div className="dot" />*/}
        {/*    <div className="detail">*/}
        {/*      <span>WATERLABEL 개발 착수 </span>*/}
        {/*      <span>WATERLABEL 특허 출원</span>*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*</div>*/}
      </div>
      {/*<RoadmapTest />*/}
    </>
  );
};

export default RoadmapComponent;
