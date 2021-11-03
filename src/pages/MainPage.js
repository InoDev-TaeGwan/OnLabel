import React from 'react';
import Layout from 'layout/Layout';
import MainBannerComponent from 'components/MainBannerComponent';
import ValueationComponent from 'components/ValueationComponent';
import BannerComponent from 'components/BannerComponent';
import RoadmapComponent from 'components/RoadmapComponent';
import PartnersComponent from 'components/PartnersComponent';
import TeamComponent from 'components/TeamComponent';
import AdviserComponent from 'components/AdviserComponent';
import ContactComponent from 'components/ContactComponent';

const MainPage = () => {
    return (
        <Layout
            whitePaper={`https://stea.s3.ap-northeast-2.amazonaws.com/whitepaper/211102+stea+white+paper.pdf`}
        >
            <MainBannerComponent />
            <ValueationComponent
                video1={`https://stea.s3.ap-northeast-2.amazonaws.com/video/video1.mp4`}
                video2={`https://stea.s3.ap-northeast-2.amazonaws.com/video/video2.mp4`}
                video3={`https://stea.s3.ap-northeast-2.amazonaws.com/video/video3.mp4`}
            />
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
