import React, { useState } from 'react';
import personIcon from 'assets/icons/person.svg';
import mailIcon from 'assets/icons/mail.svg';
import { dbService } from '../../FireBase';
import useInputs from '../../hooks/useInputs';
import SendMessage from '../../shared/SendMessage';

const ContactComponent = () => {
    const [{ name, email, message }, onChange, reset] = useInputs({
        name: '',
        email: '',
        message: '',
    });
    // const [isSuccess, setIsSuccess] = useState(false);
    const [clickCount, setClickCount] = useState(0);

    const onSubmitContactUs = async (event) => {
        event.preventDefault();
        try {
            if (name && message && email) {
                await dbService.collection('contact').add({
                    name,
                    email,
                    message,
                    isContact: false,
                    createAt: Date.now(),
                });
                reset();
                window.alert('접수되었습니다.');
                // setIsSuccess(true);
                setClickCount(0);
            } else {
                window.alert('잠시후 다시 시도해주세요.');
                // setIsSuccess(false);
                setClickCount(clickCount + 1);
            }
        } catch (error) {
            // setIsSuccess(false);
            setClickCount(clickCount + 1);
        }
    };

    // const handleConfirm = useCallback(() => {
    //     setIsSuccess(false);
    // }, []);

    return (
        <div className="contactContainer wrap" id="contact">
            <span className="title">CONTACT US</span>
            <div className="formContainer">
                <div className="inputContainer">
                    <div className="left">
                        <div className="mb_50">
                            <span className="label">YOUR NAME</span>
                            <div className="p_relative">
                                <input
                                    name="name"
                                    type="text"
                                    placeholder="YOUR NAME"
                                    value={name}
                                    onChange={onChange}
                                />
                                <img src={personIcon} alt="userIcon" />
                            </div>
                            {!name && clickCount > 0 && (
                                <span className="error">
                                    필수 입력 항목 입니다.
                                </span>
                            )}
                        </div>
                        <div>
                            <span className="label">E-MAIL</span>
                            <div className="p_relative">
                                <input
                                    name="email"
                                    type="text"
                                    placeholder="E-MAIL"
                                    value={email}
                                    onChange={onChange}
                                />
                                <img src={mailIcon} alt="userIcon" />
                            </div>
                            {!email && clickCount > 0 && (
                                <span className="error">
                                    반드시 Email을 입력해주세요.
                                </span>
                            )}
                        </div>
                    </div>
                    <div className="right">
                        <span className="label">MESSAGE</span>
                        <textarea
                            name="message"
                            placeholder="WRITE YOUR MESSAGE HERE"
                            value={message}
                            onChange={onChange}
                        />
                        {!message && clickCount > 0 && (
                            <div className="error">필수 입력 항목입니다.</div>
                        )}
                    </div>
                </div>
                <div style={{ padding: '0 50px' }}>
                    <SendMessage handleSendMessage={onSubmitContactUs} />
                </div>
                {/*{isSuccess ? (*/}
                {/*    <div>*/}
                {/*        success message{' '}*/}
                {/*        <button onClick={handleConfirm}>확인</button>*/}
                {/*    </div>*/}
                {/*) : (*/}
                {/*    <div>*/}
                {/*        fail message{' '}*/}
                {/*        <button onClick={handleConfirm}>확인</button>*/}
                {/*    </div>*/}
                {/*)}
                 */}
            </div>
        </div>
    );
};

export default ContactComponent;
