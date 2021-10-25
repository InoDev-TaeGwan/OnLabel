import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainPage from 'pages/MainPage';
import AdminPage from 'pages/Admin/AdminPage';
import WhitePaperComponent from "components/WhitePaperComponent";

const RouterApp = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <MainPage />
                </Route>
                <Route exact path="/admin/sign-in">
                    <AdminPage/>
                </Route>
                <Route exact path="/whitePaper" component={WhitePaperComponent} />
            </Switch>
        </BrowserRouter>
    );
};

export default RouterApp;
