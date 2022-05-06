import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import img from '../../../images/login.jpg';
import './Login.css';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
    }
    const navigateRegister = event => {
        navigate(`/register`);
    }
    return (
        <div className='login py-5 bg-dark'>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6 text-center px-5">
                        <img className="w-100 img-fluid" src={img} alt="" />
                    </div>
                    <div className="col-12 col-md-6 px-5">
                        <h1 className='text-center pt-3 fw-bold text-info'>Please Login</h1>
                        <form onSubmit={handleSubmit}>
                            {/* <SocialLogin></SocialLogin> */}
                            <div>
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
                                    <button type="submit" className="btn rounded-pill text-white fw-bold bg-info">Login Here</button>
                                </div>
                            </div>
                            <p className='mt-2 text-muted'>Have no account? <Link onClick={navigateRegister} to='/register' className='text-decoration-none pe-auto text-info'>Please Register</Link></p>
                            
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;