import React, { memo, useCallback, useState } from 'react';
import ReactCardFlip from 'react-card-flip';
// import ProfileHistory from './ProfileHistory';

const Profile = memo(({ name, position, image, profileHistory, mobile }) => {
    const [isFlipped, setIsFlipped] = useState(false);
    const handleFlip = useCallback((e) => {
        e.preventDefault();
        setIsFlipped((prevState) => !prevState.isFlipped);
    }, []);

    return (
        <>
            {mobile ? (
                <div className="profile_mobile">
                    <ReactCardFlip
                        isFlipped={isFlipped}
                        flipDirection="vertical"
                    >
                        <div className="nameImage" onClick={handleFlip}>
                            <div className="profileImage">
                                <img
                                    src={image}
                                    alt="profileImage"
                                    width="100%"
                                />
                            </div>
                            <div className="namePosition">
                                <span className="name">{name}</span>
                                <span className="position">{position}</span>
                            </div>
                        </div>
                        <div className="profileHistory" onClick={handleFlip}>
                            {profileHistory}
                        </div>
                    </ReactCardFlip>
                </div>
            ) : (
                <div className="profile">
                    <div className="nameImage">
                        <div>
                            <span className="name">{name}</span>
                            <span className="position">{position}</span>
                        </div>
                        <div className="profileImage">
                            <img src={image} alt="profileImage" width="100%" />
                        </div>
                    </div>
                    <div className="profileHistory">{profileHistory}</div>
                </div>
            )}
        </>
    );
});

export default Profile;
