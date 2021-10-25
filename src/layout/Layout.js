import React from "react";
import Footer from "./Footer";
import SideMenu from "./SideMenu";

const Layout = ({ children }) => {
  return <div className="Layout"><SideMenu />{children}<Footer /></div>;
};

export default Layout;
