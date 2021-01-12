import React from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from '../../components/shared/Header';
import MainView from './MainView';

const HomeView = () => {
    return (
        <BrowserRouter>
            <Header />
            <main className="py-3">
                <Container>
                    <Route path="/home" component={MainView} />
                </Container>
            </main>
        </BrowserRouter>
    );
};

export default HomeView;
