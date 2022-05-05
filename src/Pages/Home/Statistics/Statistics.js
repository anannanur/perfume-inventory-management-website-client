import { faAngleDoubleRight, faArrowPointer, faSortAmountUp, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Statistics.css';
import CountUp from 'react-countup';

const Statistics = () => {
    return (
        <div className='statistics-section py-5 mt-5'>
            <h1 className='title text-center fw-bold pb-4'>Some Statistics</h1>
            <div className="row pt-4 pb-5 mt-5">
                <div className="col-12 col-md-3 text-center fw-bold">
                    <h1> <FontAwesomeIcon icon={faAngleDoubleRight} /></h1>
                    <h1 className='fw-bold'><CountUp end={2000} duration={5} /></h1>
                    <p>Perfume Sold</p>
                </div>
                <div className="col-12 col-md-3 text-center fw-bold">
                    <h1><FontAwesomeIcon icon={faSortAmountUp} /></h1>
                    <h1 className='fw-bold'>৳<CountUp end={100000} duration={5} /></h1>
                    <p>Amount Sold</p>
                </div>
                <div className="col-12 col-md-3 text-center fw-bold">
                    <h1><FontAwesomeIcon icon={faStar} /></h1>
                    <h1 className='fw-bold'><CountUp end={100} duration={5} />%</h1>
                    <p>Customer Satisfaction</p>
                </div>
                <div className="col-12 col-md-3 text-center fw-bold">
                    <h1><FontAwesomeIcon icon={faArrowPointer} /></h1>
                    <h1 className='fw-bold'><CountUp end={3600} duration={5} /></h1>
                    <p>Product changes</p>
                </div>
            </div>
        </div >
    );
};

export default Statistics;