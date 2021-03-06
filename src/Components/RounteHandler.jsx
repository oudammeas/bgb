import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom'
import LoginPage from "./LoginPage"
import NotFoundPage from "./404";
import WelcomePage from './WelcomePage';
import JoinGamePage from './JoinGamePage/JoinGamePage';
import CreateGamePage from './CreateGamePage';
import DashboardPage from './DashboardPage/DashboardPage';

export const route = [ 
    { path: '/', exact: true, Component: LoginPage, name: "Login Page" },
    { path: '/welcome', Component: WelcomePage, name: "Welcome Page" },
    { path: '/joingame', Component: JoinGamePage, name: "Join Game Page" },
    { path: '/creategame', Component: CreateGamePage, name: "Create Game Page" },
    { path: '/dashboard', Component: DashboardPage, name: "Dashboard Page" },
    { path: "*", Component: NotFoundPage }
]

const RouteHandler = () => {
    return (
        <Fragment>
            <Switch>
                {route.map(page =>
                    <Route path={page.path}
                        exact={page.exact}
                        component={page.Component}>
                    </Route>
                )}
            </Switch>
        </Fragment>
    );
}

export default RouteHandler;
