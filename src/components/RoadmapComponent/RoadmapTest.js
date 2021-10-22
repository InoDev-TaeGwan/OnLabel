import React from "react";

import "./test.css";

const RoadmapComponent = () => {
  return (
    <div className="roadmapContainer">
      <span className="title">ROADMAP</span>
      <ul className="timeline">
        <li className="one">
          <div className="contentBox">
            <div className="year">2021Y 4Q</div>
            <div className="detail">
              <span>LABEL 개발 착수</span>
              <span>LABEL 특허 출원</span>
            </div>
          </div>
        </li>
        <li className="two">
          <div className="contentBox">
            <div className="year">2021Y 5Q</div>
            <div className="detail">
              <span>LABEL 웹사이트 런칭</span>
              <span>LABEL Token 상장</span>
            </div>
          </div>
        </li>
        <li className="three">
          <div className="contentBox">
            <div className="year">2021Y 4Q</div>
            <div className="detail">
              <span>
                LABEL NFT
                <br /> MARKETPLACE 런칭
              </span>
              <span>
                LABEL
                <br /> Chrome Extension 런칭
              </span>
              <span>
                LABEL 실물 자산 등<br /> 다양한 생태계 확장
              </span>
            </div>
          </div>
        </li>
        <li className="four">
          <div className="contentBox">
            <div className="year">2021Y 4Q~</div>
            <div className="detail">
              <span>
                LABEL 모바일
                <br /> 어플리케이션 런칭
              </span>
              <span>
                AI 이미지 인식 기술을 접목한 <br />
                LABEL 업데이트
              </span>
              <span>
                LABEL 토큰
                <br /> 보상 플랜 발표
              </span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default RoadmapComponent;
