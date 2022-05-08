import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Header.css';

const Header = () => {
    const [user] = useAuthState(auth);

    // user logout process 
    const handleLogout = () => {
        signOut(auth);
    }

    // taking to home 
    const navigate = useNavigate();
    const switchedToHome = () => {
        navigate('/')
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    return (
        <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand onClick={switchedToHome} as={Link} to="/">Perfume</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto text-center">
                        <Nav.Link onClick={switchedToHome} className="fs-5 me-1" as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link className="fs-5 me-1" as={Link} to="/blog">Blog</Nav.Link>
                        {
                            user ?
                                <>
                                    <Nav.Link className="fs-5 me-1" as={Link} to="/manageitems">Manage Inventory</Nav.Link>
                                    <Nav.Link className="fs-5 me-1" as={Link} to="/additem">Add Item</Nav.Link>
                                    <Nav.Link className="fs-5 me-1" as={Link} to="/myitem">My Item</Nav.Link>
                                    <button onClick={handleLogout} style={{ backgroundColor: 'goldenrod' }} className='btn ms-1 fw-bold text-white'>Logout</button>
                                </>
                                :
                                <>
                                    <Nav.Link className="fs-5 me-1" as={Link} to="/login">Login</Nav.Link>
                                </>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;