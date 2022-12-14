import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import empty from '../../../images/empty.png';

const Header = () => {
    const [user] = useAuthState(auth);
    console.log(user);

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
                <Navbar.Brand style={{ fontFamily: 'Oleo Script', fontSize: '50px', fontWeight: '500', color: 'rgb(225, 168, 23)' }} onClick={switchedToHome} as={Link} to="/">Perfume</Navbar.Brand>
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
                                    

                                        {
                                            user?.emailVerified === true ?
                                            <Nav.Link className="fs-5 me-1"><img style={{ height: '30px', width: '30px', borderRadius: '50%' }} 
                                        src={user.photoURL} alt="" className="fs-5 me-1" /></Nav.Link>
                                        :
                                        <Nav.Link className="fs-5 me-1"><img style={{ height: '30px', width: '30px', borderRadius: '50%' }} 
                                        src={empty} alt="" className="fs-5 me-1" /></Nav.Link>

                                    }
                                
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