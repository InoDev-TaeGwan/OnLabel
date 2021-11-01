import React from 'react';
import {Link} from "react-scroll";

// import Logo from 'assets/images/Logo.png';
import Logo from 'assets/images/Logo2.png';
import CreateNFT from "shared/CreateNFT";


const SideMenu = () => {
    return (
        <div className="sideMenu">
            <div className="labelLogo">
                <img src={Logo} alt="LabelLogo" width="100%"/>
            </div>
            <Link activeClass="sideActive" to="main" spy={true} smooth={true}>
                <span>About</span>
            </Link>
            <Link activeClass="sideActive" to="roadMap" spy={true} smooth={true}>
                <span>Roadmap</span>
            </Link>
            <Link activeClass="sideActive" to="partners" spy={true} smooth={true}>
                <span>Partners</span>
            </Link>
            <Link activeClass="sideActive" to="team" spy={true} smooth={true}>
                <span>Team</span>
            </Link>
            <Link activeClass="sideActive" to="adviser" spy={true} smooth={true}>
                <span>Adviser</span>
            </Link>
            <Link activeClass="sideActive" to="contact" spy={true} smooth={true}>
                <span>Contact</span>
            </Link>
            <CreateNFT />
        </div>
    );
};

export default SideMenu;
