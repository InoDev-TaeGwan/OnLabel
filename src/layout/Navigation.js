import React from 'react';

import menuIcon from 'assets/icons/Menu_gray.svg';
import logoSmall from 'assets/images/LogoSmall.png';

const Navigation = ({ handleOpenMenu }) => {
    return (
        <div className="navigation">
            <div className="navigationContainer">
                <div className="menuIcon" onClick={handleOpenMenu}>
                    <img src={menuIcon} alt="menu img" width="100%" />
                </div>
                <div className="logoSmall">
                    <img src={logoSmall} alt="logo img" width="100%" />
                </div>
            </div>
        </div>
    );
};

export default Navigation;
