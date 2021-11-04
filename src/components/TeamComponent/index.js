import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Profile from 'shared/Profile';
import { partnerData } from 'utils/dumy.js';

const TeamComponent = () => {
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const screenMobile = window.matchMedia('screen and (max-width: 768px)');
        setIsMobile(screenMobile.matches);
    }, []);

    const data = partnerData;
    const dataResult = [];
    for (let i = 0; i < data.length; i += 4)
        dataResult.push(data.slice(i, i + 4));
    // console.log(dataResult);

    const settings = {
        dots: true,
        infinite: true,
        // autoplay: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div className="teamAContainer wrap" id="team">
            <span className="title">TEAM</span>
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
                    {partnerData.map((partner) => (
                        <Profile
                            key={partner.id}
                            name={partner.name}
                            position={partner.position}
                            image={partner.image}
                            profileHistory={partner.profileHistory}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default TeamComponent;
