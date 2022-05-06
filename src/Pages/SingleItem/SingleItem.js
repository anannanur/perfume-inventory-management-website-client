import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const SingleItem = () => {
    const { id } = useParams();
    const [item, setItem] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/perfume/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data))
    }, [id]);

    return (
        <div className='container py-5'>
            <div className="card py-5 shadow-lg rounded">
                <div className="row g-0">
                    <div className="col-md-4 mt-4" style={{ textAlign: 'center' }}>
                        <img src={item?.img} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h4 className="card-title fw-bold" style={{ color: 'goldenrod' }}>{item?.name}</h4>
                            <p className="card-text text-muted">{item?.description}</p>
                            <p className="card-text"><small className="text-dark fw-bold">id: {item?.id}</small></p>
                            <p className="card-text"><small className="text-secondary fw-bold">Sold: {item?.sold}</small></p>
                            <p className="card-text"><small className="text-primary fw-bold">Quantity: {item?.quantity}</small></p>
                            <p className="card-text"><small className="text-danger fw-bold">Price: ৳{item?.price}</small></p>
                            <p className="card-text"><small className="text-success fw-bold">Supplier: {item?.supplier}</small></p>
                            <button className='btn btn-success'>Delivered</button>

                        </div>
                        <div className='d-flex ms-3'>
                            <input className="form-control w-25 me-2" type="number" name="" id="" placeholder='Add quantity' />
                            <button className='btn btn-light'>Restock</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='text-center mt-5'>
                <Link to="/manageitems" class="btn btn-dark text-white fw-bold">Manage Inventories</Link>
            </div>
        </div>

    );
};

export default SingleItem;