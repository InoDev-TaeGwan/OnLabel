import React, {useCallback, useState} from 'react';

const CreateNFT = ({shadowBtn}) => {
    const [isButton,setIsButton] = useState(false);
    const handleButton = useCallback(()=>{
        setIsButton(!isButton)
    },[isButton])
    return (
        <>
            {shadowBtn ?
                (
                    <div onMouseLeave={handleButton} onMouseEnter={handleButton}>
                        {isButton ? (
                            <a href="https://www.waterlabelproducts.com/" target='black'>
                                <button className="CreateNFTActive_shadow" />
                            </a>
                        ) : (
                            <button className="CreateNFT_shadow" />
                        )}
                    </div>
                ):(
                    <div onMouseLeave={handleButton} onMouseEnter={handleButton}>
                        <a href="https://www.waterlabelproducts.com/" target='black'>
                        {isButton ? (
                            <a href="https://www.waterlabelproducts.com/" target='black'>
                                <button className="CreateNFT" />
                            </a>
                        ) : (
                            <button className="CreateNFTActive" />
                        )}
                        </a>
                    </div>
                )
            }
        </>
    );
};

export default CreateNFT;
