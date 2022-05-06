import React, { useEffect, useState } from 'react';
import ManageItem from '../ManageItem/ManageItem';

const ManageItems = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/perfume')
            .then(res => res.json())
            .then(data => setItems(data))
    }, []);

    return (
        <div className='py-5'>
            <h1 className='item-title pt-3 pb-5 fw-bold text-dark'>Inventory Items</h1>
            <div className="container">
                <div className='row row-cols-1 row-cols-md-3 g-4'>
                    {
                        items.slice(12).map(item => <ManageItem
                            key={item._id}
                            item={item}></ManageItem>)
                    }
                </div>
            </div>
            <div className='text-center mt-5'>
                <button type="button" className="btn btn-warning">Add New Item</button>
            </div>
        </div>
    );
};

export default ManageItems;