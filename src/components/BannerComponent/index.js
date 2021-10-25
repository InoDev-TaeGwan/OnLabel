import React from "react";
import CreateNFT from "shared/CreateNFT";

const BannerComponent = () => {

  return (
        <div className="bannerContainer">
          <span>
            자신의 작품을 보호할
            <br />
            준비가 되셨나요?
          </span>
            <CreateNFT shadowBtn />
        </div>
  );
};

export default BannerComponent;
