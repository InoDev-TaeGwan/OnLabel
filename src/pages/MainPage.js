import React, { useCallback, useState, useEffect } from 'react';
import Layout from 'layout/Layout';
import MainBannerComponent from 'components/MainBannerComponent';
import ValueationComponent from 'components/ValueationComponent';
import BannerComponent from 'components/BannerComponent';
import RoadmapComponent from 'components/RoadmapComponent';
import PartnersComponent from 'components/PartnersComponent';
import TeamComponent from 'components/TeamComponent';
import AdviserComponent from 'components/AdviserComponent';
import ContactComponent from 'components/ContactComponent';
import { storageService } from '../FireBase';

const MainPage = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [file, setFiles] = useState({
        video1: '',
        video2: '',
        video3: '',
        whitePaper: '',
    });
    const getStorageFile = useCallback(async () => {
        const fileLists = [
            'video1.mp4',
            'video2.mp4',
            'video3.mp4',
            '211021_label_white_paper.pdf',
        ];
        for (const fileList of fileLists) {
            const baseUrl = `gs://onlabel-cbe22.appspot.com/${fileList}`;
            const url = await storageService
                .refFromURL(baseUrl)
                .getDownloadURL();
            const [name, extend] = fileList.split('.');
            extend === 'mp4'
                ? setFiles((prev) => ({
                      ...prev,
                      [name]: url,
                  }))
                : setFiles((prev) => ({ ...prev, whitePaper: url }));
        }
        setIsLoading(true);
    }, []);

    useEffect(() => {
        getStorageFile();
    }, [getStorageFile]);

    return (
        <>
            {isLoading ? (
                <Layout whitePaper={file.whitePaper}>
                    <MainBannerComponent />
                    <ValueationComponent
                        video1={file.video1}
                        video2={file.video2}
                        video3={file.video3}
                    />
                    <BannerComponent />
                    <RoadmapComponent />
                    <PartnersComponent />
                    <TeamComponent />
                    <AdviserComponent />
                    <ContactComponent />
                </Layout>
            ) : null}
        </>
    );
};

export default MainPage;
