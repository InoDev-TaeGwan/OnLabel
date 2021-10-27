import React, {useCallback, useState} from 'react';

const CreateNFT = ({shadowBtn}) => {
    const [isButton,setIsButton] = useState(false);
    const handleButton = useCallback(()=>{
        setIsButton(!isButton)
    },[isButton])

    const handleNFT = useCallback(()=>{
        window.open('https://www.waterlabelproducts.com/');
    },[])

    return (
        <>
            {shadowBtn ?
                (
                    <>
                        {isButton ? (
                                <button className="CreateNFTActive_shadow" onClick={handleNFT} onMouseLeave={handleButton} onMouseEnter={handleButton}>
                                    <div className="subBackground">
                                        <span>
                                        Create NFT
                                        </span>
                                    </div>
                                </button>
                        ) : (
                            <button className="CreateNFT_shadow"  onMouseLeave={handleButton} onMouseEnter={handleButton}>
                                Create NFT
                            </button>
                        )}
                    </>
                ):(
                    <>
                        {isButton ? (
                            <button className="CreateNFTActive" onClick={handleNFT} onMouseLeave={handleButton} onMouseEnter={handleButton}>
                                <div className="subBackground">
                                    Create NFT
                                </div>
                            </button>
                        ) : (
                            <button className="CreateNFT" onMouseLeave={handleButton} onMouseEnter={handleButton}>
                                Create NFT
                            </button>
                            )}
                    </>
                )
            }
        </>
    );
};

export default CreateNFT;
