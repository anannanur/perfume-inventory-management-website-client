import React from 'react';
import { Link } from 'react-router-dom';
import useItems from '../../../Hooks/useItems';
import Item from '../Item/Item';
import './Items.css';

const Items = () => {

    // using custom hook 
    const [items] = useItems([]);
    return (
        <div className='py-5'>
            <h1 className='item-title pt-3 pb-5 fw-bold text-dark'>Inventory Items</h1>
            <div className='item-container'>
                {
                    items.slice(0, 6).map(item => <Item
                        key={item._id}
                        item={item}></Item>)
                }
            </div>
            <div className="text-center mt-5 pt-3">
                <Link to='/manageitems' style={{ backgroundColor: 'goldenrod' }} className='btn rounded btn-lg text-white fw-bold'>Manage Inventory</Link>
            </div>
        </div>
    );
};

export default Items;