import React from 'react';
import { Link } from 'react-scroll';

import Logo from 'assets/images/LogoSmall.png';
import Close from 'assets/icons/close_gray.svg';
import CreateNFT from 'shared/CreateNFT';
import WhitePaper from 'shared/WhitePaper';

const MobileSideMenu = ({
    whitePaper,
    handleCloseMenu,
    overLayRef,
    mobileSideMenuRef,
    isMenu,
}) => {
    return (
        <>
            <div
                className={`mobileSideMenu ${isMenu ? 'menuAnimateLeft' : ' '}`}
                ref={mobileSideMenuRef}
            >
                <div className="menuTop">
                    <div className="labelLogo">
                        <img src={Logo} alt="LabelLogo" width="100%" />
                    </div>
                    <div className="menuClose" onClick={handleCloseMenu}>
                        <img src={Close} alt="Close" width="100%" />
                    </div>
                </div>
                <div className="menuList">
                    <WhitePaper sideMenu whitePaper={whitePaper} />
                    <ul>
                        <li>
                            <Link
                                activeClass="sideActive"
                                to="main"
                                spy={true}
                                smooth={true}
                            >
                                <span
                                    className="navName"
                                    onClick={handleCloseMenu}
                                >
                                    About
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                activeClass="sideActive"
                                to="roadMap"
                                spy={true}
                                smooth={true}
                            >
                                <span
                                    className="navName"
                                    onClick={handleCloseMenu}
                                >
                                    Roadmap
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                activeClass="sideActive"
                                to="partners"
                                spy={true}
                                smooth={true}
                            >
                                <span
                                    className="navName"
                                    onClick={handleCloseMenu}
                                >
                                    Partners
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                activeClass="sideActive"
                                to="team"
                                spy={true}
                                smooth={true}
                            >
                                <span
                                    className="navName"
                                    onClick={handleCloseMenu}
                                >
                                    Team
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                activeClass="sideActive"
                                to="adviser"
                                spy={true}
                                smooth={true}
                            >
                                <span
                                    className="navName"
                                    onClick={handleCloseMenu}
                                >
                                    Adviser
                                </span>
                            </Link>
                        </li>
                        <li>
                            {' '}
                            <Link
                                activeClass="sideActive"
                                to="contact"
                                spy={true}
                                smooth={true}
                            >
                                <span
                                    className="navName last"
                                    onClick={handleCloseMenu}
                                >
                                    Contact
                                </span>
                            </Link>
                        </li>
                    </ul>
                    <CreateNFT
                        single
                        style={{
                            width: '100%',
                            fontSize: '16px',
                            height: '45px',
                        }}
                    />
                </div>
            </div>
            <div
                className="overlay"
                ref={overLayRef}
                onClick={handleCloseMenu}
            />
        </>
    );
};

export default MobileSideMenu;
