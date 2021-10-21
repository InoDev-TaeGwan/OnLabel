import React from "react";
import video1 from "assets/video/video4.mp4";

const Items = ({ reverse }) => {
  console.log(reverse);
  return (
    <div className="itemBox">
      {reverse ? (
        <>
          <div className="contentBox">
            <span className="title">
              디지털 자산에는 아직 해결되지 못한
              <br />
              문제들이 있습니다.
            </span>
            <span className="subTitle">
              NFT는 이름 그대로 완전 대체 불가능할까요?
              <br />
              아티스트가 처음으로 게시한 NFT는 어느 누구라도
              <br />
              작품을 복사해 자신만의 NFT로 만들 수 있고 그것의 원작자의 증명은
              <br />
              아직 명확하게 이루어지지 않고 있습니다.
            </span>
          </div>
          <div className="video">
            <video autoPlay loop>
              <source src={video1} />
            </video>
          </div>
        </>
      ) : (
        <>
          <div className="video">
            <video autoPlay loop>
              <source src={video1} />
            </video>
          </div>
          <div className="contentBox">
            <span className="title">
              디지털 자산에는 아직 해결되지 못한
              <br />
              문제들이 있습니다.
            </span>
            <span className="subTitle">
              NFT는 이름 그대로 완전 대체 불가능할까요?
              <br />
              아티스트가 처음으로 게시한 NFT는 어느 누구라도
              <br />
              작품을 복사해 자신만의 NFT로 만들 수 있고 그것의 원작자의 증명은
              <br />
              아직 명확하게 이루어지지 않고 있습니다.
            </span>
          </div>
        </>
      )}
    </div>
  );
};

export default Items;
