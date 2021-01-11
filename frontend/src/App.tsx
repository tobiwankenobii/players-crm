import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter, Route } from 'react-router-dom';
import LoginView from './views/auth/LoginView';

export default class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Container>
                    <Route path="/login" component={LoginView} exact />
                </Container>
            </BrowserRouter>
        );
    }
}
