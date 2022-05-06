import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import img from '../../../images/register.jpg';
import auth from '../../../firebase.init';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import SocialLogin from '../SocialLogin/SocialLogin';
import Loading from '../../Shared/Loading/Loading';

const Register = () => {
    const navigate = useNavigate();
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const userNameRef = useRef('');
    let errorMsg;
    let loader;

    // Using React hooks Registration:
    const [
        createUserWithEmailAndPassword,
        error,
        user,
        loading
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });


    // Update Profile for Name:
    const [updateProfile, updating] = useUpdateProfile(auth);

    const navigateLogin = event => {
        navigate(`/login`);
    }
    // user registration 
    const handleRegister = async (event) => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const displayName = userNameRef.current.value;
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName });
    }
    // error handling 
    if (error) {
        errorMsg = <div className='bg-danger text-center rounded d-inline-block p-2 mt-3'>
            <span className='text-white'>Error: {error.message}</span>
        </div>
    }
    if (loading || updating) {
        loader = <Loading />
    }
    if (user) {
        navigate('/home');
    }
    return (
        <div className='register bg-dark'>
            <div className="container">
                {loader}
                <h1 className='text-center fw-bold text-info pb-4'>Please Register</h1>
                <div className="row pt-1">
                    <div className="col-12 col-md-6 text-center px-5">
                        <img className="w-100 img-fluid" src={img} alt="" />
                    </div>
                    <div className="col-12 col-md-6 px-5 pt-5">
                        <SocialLogin />
                        <form onSubmit={handleRegister}>
                            <div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputtext" className="form-label text-muted">Your Name</label>
                                    <input ref={userNameRef} type="text" className="form-control" id="exampleInputtext1" required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label text-muted">Email address</label>
                                    <input ref={emailRef} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label text-muted">Password</label>
                                    <input ref={passwordRef} type="password" className="form-control" id="exampleInputPassword1" required />
                                </div>
                                <div className='my-4 d-grid'>
                                    <button type="submit" className="btn text-white fw-bold btn-outline-info">
                                        <FontAwesomeIcon icon={faSignInAlt} /> Register</button>
                                </div>
                            </div>
                            <p className='mt-2 text-muted'>Already registered? <Link onClick={navigateLogin} to='/login' className='text-decoration-none pe-auto text-info'>Please Login</Link></p>
                            {errorMsg}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
