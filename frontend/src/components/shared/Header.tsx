import React from 'react';
import { Container, Nav, Navbar, NavDropdown, Badge } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { logout } from '../../actions/auth/userActions';
import { useHistory } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';

const Header = () => {
    const history = useHistory();
    const dispatch = useDispatch();

    const signout = () => {
        dispatch(logout());
        history.push('/login');
    };

    let userInfo = localStorage.getItem('userInfo');
    if (userInfo) {
        userInfo = JSON.parse(userInfo).username;
    } else {
        signout();
    }

    return (
        <Container>
            <Navbar variant="dark" bg="dark">
                <LinkContainer to="/home">
                    <Navbar.Brand>
                        <Badge
                            variant="secondary"
                            style={{ fontSize: '1.25rem' }}
                        >
                            PlayersCRM
                        </Badge>
                    </Navbar.Brand>
                </LinkContainer>
                <Navbar.Collapse>
                    <Nav className="mr-auto">
                        <LinkContainer to="/home">
                            <Nav.Link>
                                <i className="fas fa-home"></i> Home
                            </Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/dashboard">
                            <Nav.Link>
                                <i className="fas fa-chart-line"></i> Dashboard
                            </Nav.Link>
                        </LinkContainer>
                    </Nav>
                    <Nav>
                        <NavDropdown
                            title={`Signed as: ${userInfo}`}
                            id="basic-nav-dropdown"
                        >
                            <NavDropdown.Item href="/dashboard">
                                Dashboard
                            </NavDropdown.Item>
                            <NavDropdown.Divider />

                            <NavDropdown.Item onClick={signout}>
                                Sign Out
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    );
};

export default Header;
