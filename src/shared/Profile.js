import React from "react";

import ceoImage from "assets/images/ceo.png";

const Profile = () => {
  return (
    <div className="profile">
      <div className="nameImage">
        <div>
          <span className="name">김성수</span>
          <span className="position">CEO</span>
        </div>
        <div className="profileImage">
          <img src={ceoImage} alt="profileImage" width="100%" />
        </div>
      </div>
      <div className="profileHistory">
        카이스트 기계공학, 산업 및 시스템 공학 졸업
        <br />
        중소기업진흥공단 청년창업사관학교 3기 졸업
        <br />
        2015' 카이스트 기업가정신 총장상 대상
        <br />
        前 카이스트 사회기술혁신 연구소 팀장
        <br />
        前 카이스트 휴모노이드 로봇 '휴보' 팀장
        <br />前 레인보우로보틱스 팀장
      </div>
    </div>
  );
};

export default Profile;
