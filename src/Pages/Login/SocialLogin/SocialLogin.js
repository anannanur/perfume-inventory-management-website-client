import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import google from '../../../images/google.png';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    const location = useLocation();
    let errorMsg;

    // error handling 
    if (error) {
        errorMsg = <div className='bg-danger text-center rounded d-inline-block p-2 mt-3'>
            <span className='text-white'>Error: {error.message}</span>
        </div>

    }
    
    // user redirect if he/she will sign in with google
    let from = location.state?.from?.pathname || "/";
    if (user) {
        navigate(from, { replace: true });
    }

    return (
        <div className='text-center'>
            <div className='text-center'>
                <button onClick={() => signInWithGoogle()} className='btn btn-outline-info fw-bold text-white'>
                    <img className="rounded-circle me-1" style={{ width: '22px', transform: 'scale(1)' }} src={google} alt='' />
                    Google Sign In</button>
            </div>
            {errorMsg}
            <div className='d-flex align-items-center justify-content-center'>
                <div style={{ height: '1px' }} className='w-25 bg-info'></div>
                <p className='mt-2 px-2 text-info'>or</p>
                <div style={{ height: '1px' }} className='w-25 bg-info'></div>
            </div>
        </div>
    );
};

export default SocialLogin;