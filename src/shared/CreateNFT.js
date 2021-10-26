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
                    <div className="CreateNFTcontainer" onMouseLeave={handleButton} onMouseEnter={handleButton}>
                        {isButton ? (
                            // <a href="https://www.waterlabelproducts.com/" target='black'>
                                <button className="CreateNFTActive_shadow" onClick={handleNFT} />
                            // </a>
                        ) : (
                            <button className="CreateNFT_shadow" />
                        )}
                    </div>
                ):(
                    <div className="CreateNFTcontainer" onMouseLeave={handleButton} onMouseEnter={handleButton}>
                        {/*<a href="https://www.waterlabelproducts.com/" target='black'>*/}
                        {isButton ? (
                            // <a href="https://www.waterlabelproducts.com/" target='black'>
                                <button className="CreateNFT" onClick={handleNFT} />
                            // </a>
                        ) : (
                            <button className="CreateNFTActive" />
                        )}
                        {/*</a>*/}
                    </div>
                )
            }
        </>
    );
};

export default CreateNFT;
