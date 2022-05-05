import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className='bg-dark text-center text-white py-5 footer-style'>
            <div className="container">
                <div className="row pt-3">
                    <div className="col-md-12 text-center text-white">
                        <h2 style={{ color: 'goldenrod' }}>Perfume <FontAwesomeIcon style={{ color: 'goldenrod' }} icon={faHeart} /></h2>
                        <p>Copyright &copy; 2022 <span className="me-1" style={{ color: 'goldenrod' }}>Perfume
                        </span><FontAwesomeIcon style={{ color: 'goldenrod' }} icon={faHeart} /></p>
                        <small>All rights reserved</small>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;