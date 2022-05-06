// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import google from '../../../images/google.png';

const SocialLogin = () => {
    return (
        <div>
            <div className='text-center'>
                <button className='btn btn-outline-info fw-bold text-white'>
                    <img className="rounded-circle me-1" style={{width:'22px', transform: 'scale(1)'}} src={google} alt=''/> 
                    Google Sign In</button>
            </div>
            <div className='d-flex align-items-center justify-content-center'>
                <div style={{height:'1px'}} className='w-25 bg-info'></div>
                <p className='mt-2 px-2 text-info'>or</p>
                <div style={{height:'1px'}} className='w-25 bg-info'></div>
            </div>
        </div>
    );
};

export default SocialLogin;