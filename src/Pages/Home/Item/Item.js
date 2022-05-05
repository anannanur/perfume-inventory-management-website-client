import React from 'react';
import './Item.css';

const Item = ({item}) => {
    const {name,img,description, price, quantity,supplier} = item;
    return (
        <div className='item'>
            <img src={img} alt="" />
            <h5 className='fw-bold'>{name}</h5>
            <p className='text-secondary'><small>{description}</small></p>
            <p className='text-danger fw-bold'>Price: ৳{price}</p>
            <p className='text-primary fw-bold'><small>Quantity: {quantity}</small></p>
            <p className='text-success fw-bold'><small>Supplier: {supplier}</small></p>
            <button className='btn-style'>Stock Update</button>
        </div>
    );
};

export default Item;