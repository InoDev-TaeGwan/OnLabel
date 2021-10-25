import React, { useEffect, useState } from 'react';
import RouterApp from './routes/Router';
import { authService } from './FireBase';

function App() {
    const [isSignIn, setIsSignIn] = useState(false);
    const [userObj, setUserObj] = useState(null);
    const [init, setInit] = useState(false);

    useEffect(() => {
        authService.onAuthStateChanged((user) => {
            if (user) {
                setIsSignIn(true);
                setUserObj(user);
            } else {
                setIsSignIn(false);
            }
            setInit(true);
        });
    }, []);

    return (
        <>{init ? <RouterApp isSignIn={isSignIn} userObj={userObj} /> : null}</>
    );
}

export default App;
