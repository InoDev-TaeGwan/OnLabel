import React from 'react';
import arrow from 'assets/icons/arrow(blue).svg';

const WhitePaper = ({ whitePaper, sideMenu }) => {
    return (
        <button
            className={`whitePaperDown ${sideMenu && 'sideMenuWhitePaper'}`}
        >
            <a href={whitePaper} target="blank">
                <span className="whitePaperTitle">WHITE PAPER</span>
                <img src={arrow} alt="arrow icon" />
            </a>
        </button>
    );
};

export default WhitePaper;
