import React, {useCallback} from 'react';

import LabelLogo from 'assets/images/LabelLogo.png';
import arrow from 'assets/icons/arrow(blue).svg';
import whitePaper from 'assets/211021_label_white_paper.pdf';



const Footer = () => {
    return (
        <div className="footerContainer">
            <div className="footerContentBox">
                <div className="whitePaper">
                    <div className="labelLogo">
                        <img src={LabelLogo} alt="LabelLogo" />
                    </div>
                    <button className="whitePaperDown" >
                        <a href={whitePaper} target="blank">
                        <span>WHITE PAPER</span>
                        <img src={arrow} alt="arrow icon" />
                        </a>
                    </button>
                </div>
                <div className="privacyPolicy">
                    <span className="footerTitle">PRIVACY POLICY</span>
                    <span className="content">
                        © label. All rights reserved.
                    </span>
                </div>
                <div className="contactUs">
                    <span className="footerTitle">CONTACT US</span>
                    <span className="content">ceo@waterlabel.io</span>
                    <span className="content">
                        singapore singapore singapore singapore
                    </span>
                </div>
                <div className="snsLink">
                    <span className="footerTitle">SNS LINK</span>
                    <div className="sns twitter" />
                    <div className="sns telegram" />
                    <div className="sns discord" />
                    <div className="sns kakao" />
                    <div className="sns medium" />
                </div>
            </div>
        </div>
    );
};

export default Footer;
