import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Header.css';

const Header = () => {
    const [user] = useAuthState(auth);

    // user logout process 
    const handleLogout = () => {
        signOut(auth);
    }
    return (       
            <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/home#banner">Perfume</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link className="fs-5 me-1" as={Link} to="/home#banner">Home</Nav.Link>
                            <Nav.Link className="fs-5 me-1" as={Link} to="/manageitems">Manage Inventory</Nav.Link>
                            <Nav.Link className="fs-5 me-1" as={Link} to="/myitem">My Item</Nav.Link>
                           {
                               user ? 
                                <button onClick={handleLogout} style={{backgroundColor:'goldenrod'}} className='btn ms-1 fw-bold text-white'>Logout</button>
                               :
                                <Nav.Link className="fs-5 me-1" as={Link} to="/login">Login</Nav.Link>
                           }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
    );
};

export default Header;