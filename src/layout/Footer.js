import React from 'react';

// import Logo from 'assets/images/Logo.png';
import Logo from 'assets/images/Logo2.png';
import arrow from 'assets/icons/arrow(blue).svg';

const Footer = ({ whitePaper }) => {
    return (
        <div className="footerContainer">
            <div className="footerContentBox">
                <div className="whitePaper">
                    <div className="labelLogo">
                        <img src={Logo} alt="LabelLogo" width="100%" />
                    </div>
                    <button className="whitePaperDown">
                        <a href={whitePaper} target="blank">
                            <span>WHITE PAPER</span>
                            <img src={arrow} alt="arrow icon" />
                        </a>
                    </button>
                </div>
                <div className="privacyPolicy">
                    <span className="footerTitle">PRIVACY POLICY</span>
                    <span className="content">
                        © STEA. All rights reserved.
                    </span>
                </div>
                <div className="contactUs">
                    <span className="footerTitle">CONTACT US</span>
                    <span className="content">ceo@stea.tech</span>
                    {/*<span className="content">*/}
                    {/*    singapore singapore singapore singapore*/}
                    {/*</span>*/}
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
