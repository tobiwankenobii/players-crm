import React from 'react';
import LoginView from './views/auth/LoginView';
import HomeView from './views/home/HomeView';
import Header from './components/shared/Header';
import LandingView from './views/home/LandingView';
import DashboardView from './views/dashboards/DashboardView';

export const routes = [
    {
        path: '/',
        exact: true,
        navbar: () => <></>,
        main: () => <LandingView />,
    },
    {
        path: '/login',
        navbar: () => <></>,
        main: () => <LoginView />,
    },
    {
        path: '/home',
        navbar: () => <Header />,
        main: () => <HomeView />,
    },
    {
        path: '/dashboard',
        navbar: () => <Header />,
        main: () => <DashboardView />,
    },
];

export const backendRoute = 'http://localhost:8080';
export const adminRoute = backendRoute + '/admin';
