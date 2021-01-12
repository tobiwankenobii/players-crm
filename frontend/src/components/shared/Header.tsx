import React from 'react';
import { Container, Navbar, NavDropdown } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { logout } from '../../actions/auth/userActions';
import { useHistory } from 'react-router-dom';

const Header = () => {
    const history = useHistory();
    const dispatch = useDispatch();

    const signout = () => {
        dispatch(logout());
        history.push('/');
    };

    return (
        <Container>
            <Navbar expand="lg" variant="light" bg="light">
                <Navbar.Brand href="#">Navbar</Navbar.Brand>

                <Navbar.Collapse className="justify-content-end">
                    <NavDropdown title="Signed in as: ###" id="nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">
                            Some Action
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item onClick={signout}>
                            Sign Out
                        </NavDropdown.Item>
                    </NavDropdown>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    );
};

export default Header;
