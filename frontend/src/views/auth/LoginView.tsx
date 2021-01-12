import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    Button,
    Col,
    Container,
    Form,
    Row,
    Card,
    Alert,
} from 'react-bootstrap';
import { Location, History } from 'history';
import { State } from '../../store';
import { login } from '../../actions/auth/userActions';

interface IProps {
    location: Location;
    history: History;
}

const LoginView: React.FC<IProps> = ({ location, history }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const redirect = location.search ? location.search.split('=')[1] : '/home';

    const dispatch = useDispatch();

    const { error, userInfo } = useSelector((state: State) => state.userLogin);

    useEffect(() => {
        if (userInfo) {
            history.push(redirect);
        }
    }, [history, userInfo, redirect]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        dispatch(login(username, password));
    };

    return (
        <Container>
            <Row className="min-vh-100 justify-content-center align-items-center">
                <Col xs={10} md={6} lg={4}>
                    {error && (
                        <Alert key={error} variant="danger">
                            {error}
                        </Alert>
                    )}
                    <Card>
                        <Card.Header>
                            <h4>Sign In</h4>
                        </Card.Header>
                        <Card.Body>
                            <Form onSubmit={handleSubmit}>
                                <Form.Label>Username</Form.Label>
                                <Form.Group controlId="username">
                                    <Form.Control
                                        type="text"
                                        value={username}
                                        required
                                        onChange={(e) =>
                                            setUsername(e.target.value)
                                        }
                                    ></Form.Control>
                                </Form.Group>

                                <Form.Group
                                    controlId="password"
                                    className="mb-4"
                                >
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control
                                        type="password"
                                        value={password}
                                        required
                                        onChange={(e) =>
                                            setPassword(e.target.value)
                                        }
                                    ></Form.Control>
                                </Form.Group>

                                <Button type="submit" variant="success" block>
                                    Sign in
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default LoginView;
