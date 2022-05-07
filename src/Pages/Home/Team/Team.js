import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../../../images/team1.jpg';
import img2 from '../../../images/team2.jpg';
import img3 from '../../../images/team3.jpg';
import './Team.css';

const Team = () => {
    return (
        <div className='py-5' style={{ backgroundColor: '#f2f3f7' }}>
             <h1 className='text-center fw-bold team-title py-3'>Some of our Members</h1>
            <div className="team-container">
                <div className="card">
                    <div className="content">
                        <div className="imgBx">
                            <img src={img1} alt="" />
                        </div>
                        <div className="contentBx">
                            <h4 className='fw-bold'>William Starc</h4>
                            <h5 className='fw-bold'>Director</h5>
                        </div>
                        <div className="sci">
                            <Link to=""><i className="fa fa-facebook" aria-hidden="true"></i></Link>
                            <Link to=""><i className="fa fa-instagram" aria-hidden="true"></i></Link>
                            <Link to=""><i className="fa fa-twitter" aria-hidden="true"></i></Link>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="content">
                        <div className="imgBx">
                            <img src={img2} alt="" />
                        </div>
                        <div className="contentBx">
                            <h4 className='fw-bold'>Anny Brown</h4>
                            <h5 className='fw-bold'>Owner</h5>
                        </div>
                        <div className="sci">
                            <Link to=""><i className="fa fa-facebook" aria-hidden="true"></i></Link>
                            <Link to=""><i className="fa fa-instagram" aria-hidden="true"></i></Link>
                            <Link to=""><i className="fa fa-twitter" aria-hidden="true"></i></Link>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="content">
                        <div className="imgBx">
                            <img src={img3} alt="" />
                        </div>
                        <div className="contentBx">
                            <h4 className='fw-bold'>Alen Peter</h4>
                            <h5 className='fw-bold'>Partner</h5>
                        </div>
                        <div className="sci">
                            <Link to=""><i className="fa fa-facebook" aria-hidden="true"></i></Link>
                            <Link to=""><i className="fa fa-instagram" aria-hidden="true"></i></Link>
                            <Link to=""><i className="fa fa-twitter" aria-hidden="true"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;