import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const SingleItem = () => {
    const { id } = useParams();
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('/items.json')
            .then(res => res.json())
            .then(data => setItems(data))
    }, []);
    const clickedItem = items.find(item => item.id === parseInt(id));

    return (
        <div className='container py-5'>
            <div className="card py-5 shadow-lg rounded">
                <div className="row g-0">
                    <div className="col-md-4 mt-4" style={{ textAlign: 'center' }}>
                        <img src={clickedItem?.img} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h4 className="card-title fw-bold" style={{ color: 'goldenrod' }}>{clickedItem?.name}</h4>
                            <p className="card-text text-muted">{clickedItem?.description}</p>
                            <p className="card-text"><small className="text-dark fw-bold">id: {clickedItem?.id}</small></p>
                            <p className="card-text"><small className="text-secondary fw-bold">Sold: {clickedItem?.sold}</small></p>
                            <p className="card-text"><small className="text-primary fw-bold">Quantity: {clickedItem?.quantity}</small></p>
                            <p className="card-text"><small className="text-danger fw-bold">Price: ৳{clickedItem?.price}</small></p>
                            <p className="card-text"><small className="text-success fw-bold">Supplier: {clickedItem?.supplier}</small></p>
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
                <button type="button" class="btn btn-link">Manage Inventories</button>
            </div>
        </div>

    );
};

export default SingleItem;