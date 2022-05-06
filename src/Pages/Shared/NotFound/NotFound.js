import React from 'react';
import img from '../../../images/404.gif';

const NotFound = () => {
    return (
        <div style={{ backgroundColor: 'rgb(96, 55, 107)' }}>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 d-flex justify-content-center align-items-center">
                        <img src={img} alt="" className='w-50 h-100' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFound;