import React, { useCallback } from 'react';
// import mainBG from 'assets/video/mainBanner.mp4';

const MainBannerComponent = () => {
    const handleNFT = useCallback(() => {
        window.open('https://www.waterlabelproducts.com/');
    }, []);
    return (
        <>
            <div className="mainBannerContainer" id="main">
                <div>
                    <span className="title">
                        디지털 자산에 대한 증명은
                        <br />
                        강화되어야 합니다.
                    </span>
                    <span className="subTitle">
                        STEA를 사용하여 당신의 디지털 자산을 보호하세요.
                    </span>
                    <button
                        className="CreateNFTActive_shadow"
                        onClick={handleNFT}
                        style={{ display: 'block', margin: '0 auto' }}
                    >
                        <div className="subBackground">
                            <span>Create NFT</span>
                        </div>
                    </button>
                </div>
            </div>
            {/*<div className="mainVideoBannerContainer">*/}
            {/*  <video autoPlay loop>*/}
            {/*    <source src={mainBG} />*/}
            {/*  </video>*/}
            {/*  <div className="bgContent">*/}
            {/*    <span className="title">*/}
            {/*      디지털 자산에 대한 증명은*/}
            {/*      <br />*/}
            {/*      강화되어야 합니다.*/}
            {/*    </span>*/}
            {/*    <span className="subTitle">*/}
            {/*      LABEL을 사용하여 당신의 디지털 자산을 보호하세요.*/}
            {/*    </span>*/}
            {/*    <button className="createButton" />*/}
            {/*  </div>*/}
            {/*</div>*/}
        </>
    );
};

export default MainBannerComponent;
