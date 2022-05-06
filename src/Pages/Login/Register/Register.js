import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import img from '../../../images/register.jpg';
import auth from '../../../firebase.init';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRegistered, faSignInAlt } from '@fortawesome/free-solid-svg-icons';

const Register = () => {
    const navigate = useNavigate();
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const userNameRef = useRef('');

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);

    const navigateLogin = event => {
        navigate(`/login`);
    }

    // user registration 
    const handleRegister = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        createUserWithEmailAndPassword(email,password);
    }
    if(user){
        navigate('/home');
    }
    return (
        <div className='login py-5 bg-dark'>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6 text-center px-5">
                        <img className="w-100 img-fluid" src={img} alt="" />
                    </div>
                    <div className="col-12 col-md-6 px-5">
                        <h1 className='text-center pt-3 fw-bold text-info'>Please Register</h1>
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
                                        <FontAwesomeIcon icon={faSignInAlt}/> Register</button>
                                </div>
                            </div>
                            <p className='mt-2 text-muted'>Already registered? <Link onClick={navigateLogin} to='/login' className='text-decoration-none pe-auto text-info'>Please Login</Link></p>
                            {/* <div className='d-flex'>
                                <p className='mt-2'>Forgot Password?</p>
                                <button  className='btn btn-link pt-0 mt-0 text-decoration-none' style={{ color: '#ea8685' }}>Please Reset</button>
                            </div> */}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;