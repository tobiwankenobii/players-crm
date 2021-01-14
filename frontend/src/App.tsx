import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import LoginView from './views/auth/LoginView';
import HomeView from './views/home/HomeView';
import Header from './components/shared/Header';
import LandingView from './views/home/LandingView';
import DashboardView from './views/dashboards/DashboardView';
import { Container } from 'react-bootstrap';

const routes = [
    {
        path: '/',
        exact: true,
        sidebar: () => <></>,
        main: () => <LandingView />,
    },
    {
        path: '/login',
        sidebar: () => <></>,
        main: () => <LoginView />,
    },
    {
        path: '/home',
        sidebar: () => <Header />,
        main: () => <HomeView />,
    },
    {
        path: '/dashboard',
        sidebar: () => <Header />,
        main: () => <DashboardView />,
    },
];

const App = () => {
    return (
        <BrowserRouter>
            {routes.map((route) => (
                <Route key={route.path} path={route.path} exact={route.exact}>
                    <route.sidebar />
                    <Container>
                        <route.main />
                    </Container>
                </Route>
            ))}
        </BrowserRouter>
    );
};

export default App;
