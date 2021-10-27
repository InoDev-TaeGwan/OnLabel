import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainPage from 'pages/MainPage';
import AdminPage from 'pages/Admin/AdminPage';
import SignInPage from 'pages/Admin/SignInPage';
import TestPage from '../pages/Admin/TestPage';

const RouterApp = ({ isSignIn }) => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <MainPage />
                </Route>
                <Route exact path="/test">
                    <TestPage />
                </Route>
                {isSignIn ? (
                    <Route exact path="/admin">
                        <AdminPage />
                    </Route>
                ) : (
                    <Route exact path="/admin">
                        <SignInPage />
                    </Route>
                )}
            </Switch>
        </BrowserRouter>
    );
};

export default RouterApp;
