import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainPage from 'pages/MainPage';
import AdminPage from 'pages/Admin/AdminPage';
import SignInPage from 'pages/Admin/SignInPage';
import TestStorage from '../pages/Admin/TestStorage';

const RouterApp = ({ isSignIn }) => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <MainPage />
                </Route>
                <Route exact path="/test">
                    <TestStorage />
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
