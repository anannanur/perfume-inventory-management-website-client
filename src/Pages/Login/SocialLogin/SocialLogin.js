import React from 'react';
import { Button, Spinner } from 'react-bootstrap';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import google from '../../../images/google.png';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    const location = useLocation();
    let errorMsg;
    let loader;

    // error handling 
    if (error) {
        errorMsg = <div className='bg-danger text-center rounded d-inline-block p-2 mt-3'>
            <span className='text-white'>Error: {error.message}</span>
        </div>
    }
    if (loading) {
        loader = <Button variant="info" disabled className='mb-3'>
            <Spinner
                as="span"
                animation="grow"
                size="sm"
                role="status"
                aria-hidden="true"
                className='me-1'
            />
            Loading...
        </Button>
    }

    // user redirect if he/she will sign in with google
    let from = location.state?.from?.pathname || "/";
    if (user) {
        navigate(from, { replace: true });
    }

    return (
        <div className='text-center'>
            {loader}
            <div className='text-center'>
                <button onClick={() => signInWithGoogle()} className='btn btn-warning fw-bold text-dark'>
                    <img className="rounded-circle me-1" style={{ width: '22px', transform: 'scale(1)' }} src={google} alt='' />
                    Google Sign In</button>
            </div>
            {errorMsg}
            <div className='d-flex align-items-center justify-content-center'>
                <div style={{ height: '1px' }} className='w-25 bg-warning'></div>
                <p className='mt-2 px-2 text-warning'>or</p>
                <div style={{ height: '1px' }} className='w-25 bg-warning'></div>
            </div>
        </div>
    );
};

export default SocialLogin;