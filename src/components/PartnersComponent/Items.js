import React from "react";
import company from "assets/images/useb.png";

const Items = ({ reverse }) => {
  console.log(reverse);
  return (
    <div className="itemBox">
      <div className="contentBox">
        <span className="title">KEY PARTNERS #1</span>
        <span className="companyName">유스비</span>
        <span className="contentText">
          NFT는 이름 그대로 완전 대체 불가능할까요?
          <br />
          아티스트가 처음으로 게시한 NFT는 어느 누구라도
          <br />
          작품을 복사해 자신만의 NFT로 만들 수 있고 그것의 원작자의 증명은
          <br />
          아직 명확하게 이루어지지 않고 있습니다.
        </span>
      </div>
      <div className="partnerImage">
        <span className="imageTitle">USEB’S GLOBAL NETWORK</span>
        <img src={company} alt="company" width="100%" />
      </div>
    </div>
  );
};

export default Items;
