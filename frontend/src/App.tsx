import React from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter, Route } from 'react-router-dom';
import LoginView from './views/auth/LoginView';
import HomeView from './views/home/HomeView';
import LandingView from './views/home/LandingView';

const App = () => {
    return (
        <BrowserRouter>
            <Container>
                <Route path="/" component={LandingView} exact />
                <Route path="/login" component={LoginView} />
                <Route path="/home" component={HomeView} />
            </Container>
        </BrowserRouter>
    );
};

export default App;
