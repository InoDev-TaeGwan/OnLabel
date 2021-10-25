import React from 'react';
import LabelLogo from 'assets/images/LabelLogo.png';
import CreateNFT from "../shared/CreateNFT";


const SideMenu = () => {
    return (
        <div className="sideMenu">
            <div className="labelLogo">
                <img src={LabelLogo} alt="LabelLogo"  />
            </div>
            <span>About</span>
            <span>Roadmap</span>
            <span>Partners</span>
            <span>Team</span>
            <span>Adviser</span>
            <span>Contact</span>
            <CreateNFT />
        </div>
    );
};

export default SideMenu;
