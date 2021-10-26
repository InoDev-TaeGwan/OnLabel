import React, { useState } from 'react';
import { authService } from '../../../FireBase';

const SignInComponent = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const onChange = (event) => {
        const {
            target: { name, value },
        } = event;
        if (name === 'email') {
            setEmail(value);
        }
        if (name === 'password') {
            setPassword(value);
        }
    };

    const onClick = async (event) => {
        event.preventDefault();

        try {
            await authService.signInWithEmailAndPassword(email, password);
        } catch (error) {
            setError(error.message);
        }
    };
    return (
        <div className="signInContainer">
            <div className="formContainer">
                <div className="signIn-header">
                    <span className="signIn-title">Label Admin</span>
                </div>
                <div className="inputContainer">
                    <span className="label">Email</span>
                    <input
                        name="email"
                        type="text"
                        value={email}
                        onChange={onChange}
                        placeholder="example@example.com"
                    />
                </div>
                <div className="inputContainer">
                    <span className="label">Password</span>
                    <input
                        name="password"
                        type="password"
                        value={password}
                        onChange={onChange}
                        placeholder="password"
                    />
                </div>
                {error ? (
                    <span className="errorMsg">
                        * 이메일 혹은 비밀번호를 확인해주세요
                    </span>
                ) : null}
                <div className="buttonContainer">
                    <button onClick={onClick}>Sign In</button>
                </div>
            </div>
        </div>
    );
};

export default SignInComponent;
