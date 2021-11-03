import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Profile from 'shared/Profile';
import { adviserData } from 'utils/dumy';

const AdviserComponent = () => {
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const screenMobile = window.matchMedia('screen and (max-width: 768px)');
        setIsMobile(screenMobile.matches);
    }, []);

    const data = adviserData;
    const dataResult = [];
    for (let i = 0; i < data.length; i += 4)
        dataResult.push(data.slice(i, i + 4));
    // console.log(dataResult);

    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <div className="teamAContainer wrap" id="adviser">
            <span className="title">ADVISER</span>
            {isMobile ? (
                <div className="profileBox_mobile">
                    <Slider {...settings}>
                        {dataResult.map((data, index) => (
                            <div className="profile_group" key={index}>
                                {data.map((profile) => (
                                    <Profile
                                        mobile
                                        key={profile.id}
                                        name={profile.name}
                                        position={profile.position}
                                        image={profile.image}
                                        profileHistory={profile.profileHistory}
                                    />
                                ))}
                            </div>
                        ))}
                    </Slider>
                </div>
            ) : (
                <div className="profileBox">
                    {adviserData.map((adviser) => (
                        <Profile
                            key={adviser.id}
                            name={adviser.name}
                            position={adviser.position}
                            image={adviser.image}
                            profileHistory={adviser.profileHistory}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default AdviserComponent;
