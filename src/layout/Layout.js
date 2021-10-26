import React from 'react';
import Footer from './Footer';
import SideMenu from './SideMenu';

const Layout = ({ children, whitePaper }) => {
    return (
        <div className="Layout">
            <SideMenu />
            {children}
            <Footer whitePaper={whitePaper} />
        </div>
    );
};

export default Layout;
