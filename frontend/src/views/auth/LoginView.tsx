import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap';
interface IProps {}

interface IState {
    username: string;
    password: string;
}

export default class LoginView extends Component<IProps, IState> {
    state = {
        username: '',
        password: '',
    };

    constructor(props: {}) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event: React.FormEvent) {
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="username">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter Username"
                            value={this.state.username}
                            required
                            onChange={(e) =>
                                this.setState({ username: e.target.value })
                            }
                        ></Form.Control>
                    </Form.Group>

                    <Form.Group controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Enter password"
                            value={this.state.password}
                            required
                            onChange={(e) =>
                                this.setState({ password: e.target.value })
                            }
                        ></Form.Control>
                    </Form.Group>

                    <Button type="submit" variant="primary">
                        Sign in
                    </Button>
                </Form>
            </div>
        );
    }
}
