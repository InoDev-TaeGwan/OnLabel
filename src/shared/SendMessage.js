import React, {useCallback, useState} from 'react';

const SendMessage = ({handleSendMessage}) => {
    const [sendHover,setSendHover] = useState(false);
    const handleSendHover = useCallback(()=>{
        setSendHover(!sendHover)
    },[sendHover])
    return (
        <>
            {sendHover ?
                <button className="SendMessageActive" onMouseEnter={handleSendHover} onMouseLeave={handleSendHover} onClick={handleSendMessage}>
                Send Message
            </button> : <button className="SendMessage" onMouseEnter={handleSendHover} onMouseLeave={handleSendHover} >
                <div className="subBackground">
                    Send Message
                </div>
            </button>

            }
        </>

    );
};

export default SendMessage;
