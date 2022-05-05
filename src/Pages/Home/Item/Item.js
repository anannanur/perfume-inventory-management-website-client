import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Item.css';

const Item = ({ item }) => {
    const { id, name, img, description, price, quantity, supplier } = item;
    const navigate = useNavigate();
    const navigateToSingleItem = id => {
        navigate(`/inventory/${id}`);
    }
    return (
        <div className='item'>
            <img src={img} alt="" />
            <h5 className='fw-bold'>{name}</h5>
            <p className='text-secondary'><small>{description}</small></p>
            <p className='text-danger fw-bold'>Price: ৳{price}</p>
            <p className='text-primary fw-bold'><small>Quantity: {quantity}</small></p>
            <p className='text-success fw-bold'><small>Supplier: {supplier}</small></p>
            <button onClick={() => navigateToSingleItem(id)} className='btn-style'>Stock Update</button>
        </div>
    );
};

export default Item;