import React from 'react';
import './Banner.css';
import auth from '../../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';

const Banner = () => {
    const [user] = useAuthState(auth);
    return (
        <div className='banner'>
            <div className="animation-area">
                <h1 className='banner-title'>
                {
                    user ? <p className='fs-4'>Hi!! {user?.displayName}</p> :
                    <p></p>
                }
                Welcome to <span>Perfume</span> Inventory Management System</h1>
                <ul className="box-area">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        </div>
    );
};

export default Banner;