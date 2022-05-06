import React, { useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import img from '../../../images/login.jpg';
import './Login.css';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignIn } from '@fortawesome/free-solid-svg-icons';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import Loading from '../../Shared/Loading/Loading';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();

    // user redirect 
    let from = location.state?.from?.pathname || "/";

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    // user login 
    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password);
    }

    if (user) {
        navigate(from, { replace: true });
    }

    const navigateRegister = event => {
        navigate(`/register`);
    }
    let errorMsg;
    let loader;

    // error handling 
    if (error) {
        errorMsg = <div className='bg-danger text-center rounded d-inline-block p-2 mt-3'>
            <span className='text-white'>Error: {error.message}</span>
        </div>
    }
    if (loading || sending) {
        loader = 
        <Loading/>
    }

    // reset password 
    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email === '') {
            toast.error('please enter your email address',{
                position: toast.POSITION.TOP_CENTER,
                theme: "colored"
            });          
        }
        else {
            await sendPasswordResetEmail(email);
            toast.success("Email has been sent!!", {
                position: toast.POSITION.TOP_CENTER,
                theme: "colored"
              });
        }
    }
    return (
        <div className='login py-5 bg-dark'>
            {loader}
            <ToastContainer/>
            <div className="container">
                <h1 className='text-center pb-5 fw-bold text-info'>Please Login</h1>
                <div className="row">
                    <div className="col-12 col-md-6 text-center px-5">
                        <img className="w-100 img-fluid" src={img} alt="" />
                    </div>
                    <div className="col-12 col-md-6 px-5">
                        <SocialLogin></SocialLogin>
                        <form onSubmit={handleSubmit}>
                            <div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label text-muted">Email address</label>
                                    <input ref={emailRef} placeholder="Enter email" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label text-muted">Password</label>
                                    <input ref={passwordRef} placeholder="password" type="password" className="form-control" id="exampleInputPassword1" required />
                                </div>
                                <div className='my-4 d-grid'>
                                    <button type="submit" className="btn text-white fw-bold btn-outline-info">
                                        <FontAwesomeIcon icon={faSignIn} />  Login Here</button>
                                </div>
                                <p className='mt-2 text-muted'>Have no account? <Link onClick={navigateRegister} to='/register' className='text-decoration-none pe-auto text-info'>Please Register</Link></p>
                                <p className='mt-2 text-white'>Forgot password? <Link onClick={resetPassword} to='/login' className='text-decoration-none pe-auto text-info'>Reset please</Link></p>
                            </div>

                            <div className='text-center'>
                                {errorMsg}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;