import React, { useCallback, useRef, useState } from 'react';
import Footer from './Footer';
import SideMenu from './SideMenu';
import Navigation from './Navigation';
import MobileSideMenu from './MobileSideMenu';

const Layout = ({ children, whitePaper }) => {
    const [isMenu, setIsMenu] = useState(false);
    const overLayRef = useRef();
    const mobileSideMenuRef = useRef();
    const handleOpenMenu = useCallback((e) => {
        e.preventDefault();
        overLayRef.current.style.display = 'block';
        mobileSideMenuRef.current.style.display = 'block';
        setIsMenu(true);
    }, []);
    const handleCloseMenu = useCallback((e) => {
        e.preventDefault();
        overLayRef.current.style.display = 'none';
        mobileSideMenuRef.current.style.display = 'none';
        setIsMenu(false);
    }, []);

    return (
        <div className="Layout">
            <Navigation handleOpenMenu={handleOpenMenu} />
            <MobileSideMenu
                whitePaper={whitePaper}
                handleCloseMenu={handleCloseMenu}
                overLayRef={overLayRef}
                mobileSideMenuRef={mobileSideMenuRef}
                isMenu={isMenu}
            />
            <SideMenu />
            {children}
            <Footer whitePaper={whitePaper} />
        </div>
    );
};

export default Layout;
