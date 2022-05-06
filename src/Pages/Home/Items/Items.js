import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';
import './Items.css';

const Items = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('items.json')
            .then(res => res.json())
            .then(data => setItems(data))
    }, []);

    return (
        <div className='py-5'>
            <h1 className='item-title pt-3 pb-5 fw-bold text-dark'>Inventory Items</h1>
            <div className='item-container'>
                {
                    items.map(item => <Item
                        key={item.id}
                        item={item}></Item>)
                }
            </div>
            <div className='text-center mt-5'>
                <button type="button" class="btn btn-link">Manage Inventories</button>
            </div>
        </div>
    );
};

export default Items;