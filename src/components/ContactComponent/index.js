import React from 'react';

import personIcon from 'assets/icons/person.svg';
import mailIcon from 'assets/icons/mail.svg';
import { dbService } from '../../FireBase';
import useInputs from '../../hooks/useInputs';

const ContactComponent = () => {
    const [{ name, email, message }, onChange, reset] = useInputs({
        name: '',
        email: '',
        message: '',
    });

    const onSubmitContactUs = async (event) => {
        event.preventDefault();
        await dbService.collection('contact').add({
            name,
            email,
            message,
            createAt: Date.now(),
        });
        reset();
    };

    return (
        <div className="contactContainer wrap">
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
                    </div>
                </div>
                <button onClick={onSubmitContactUs} className="sendbtn">
                    Send Message
                </button>
            </div>
        </div>
    );
};

export default ContactComponent;
