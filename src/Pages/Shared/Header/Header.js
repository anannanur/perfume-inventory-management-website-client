import React from 'react';
import { Container, Nav, Navbar, } from 'react-bootstrap';
import './Header.css';

const Header = () => {
    return (       
            <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Perfume</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link className="fs-5 me-1" href="#features">Home</Nav.Link>
                            <Nav.Link className="fs-5 me-1" href="#pricing">Manage Inventory</Nav.Link>
                            <Nav.Link className="fs-5 me-1" href="#pricing">My Item</Nav.Link>
                            <Nav.Link className="fs-5 me-1" href="#pricing">Login</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
    );
};

export default Header;