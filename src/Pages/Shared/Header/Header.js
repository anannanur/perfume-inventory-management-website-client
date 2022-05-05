import React from 'react';
import { Container, Nav, Navbar, } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (       
            <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">Perfume</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link className="fs-5 me-1" as={Link} to="/">Home</Nav.Link>
                            <Nav.Link className="fs-5 me-1" as={Link} to="/manageitems">Manage Inventory</Nav.Link>
                            <Nav.Link className="fs-5 me-1" as={Link} to="/myitem">My Item</Nav.Link>
                            <Nav.Link className="fs-5 me-1" as={Link} to="/login">Login</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
    );
};

export default Header;