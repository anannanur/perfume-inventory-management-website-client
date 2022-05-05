import React from 'react';
import './Item.css';

const Item = ({item}) => {
    const {name,img,description, price, quantity,supplier} = item;
    return (
        <div className='item'>
            <img src={img} alt="" />
            <h2>{name}</h2>
            <p>{description}</p>
            <p>{price}</p>
            <p><small>{quantity}</small></p>
            <p><small>{supplier}</small></p>
            <button>Stock Update</button>
        </div>
    );
};

export default Item;