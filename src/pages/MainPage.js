import React from "react";
import Layout from "layout/Layout";
import MainBannerComponent from "components/MainBannerComponent";
import ValueationComponent from "components/ValueationComponent";
import BannerComponent from "components/BannerComponent";
import RoadmapComponent from "components/RoadmapComponent";
import PartnersComponent from "components/PartnersComponent";
import TeamComponent from "components/TeamComponent";
import AdviserComponent from "components/AdviserComponent";
import ContactComponent from "components/ContactComponent";

const MainPage = () => {
  return (
    <Layout>
      <MainBannerComponent />
      <ValueationComponent />
      <BannerComponent />
      <RoadmapComponent />
      <PartnersComponent />
      <TeamComponent />
      <AdviserComponent />
      <ContactComponent />
    </Layout>
  );
};

export default MainPage;
