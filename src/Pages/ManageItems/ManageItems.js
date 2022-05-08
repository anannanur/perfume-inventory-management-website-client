import React from 'react';
import { Link } from 'react-router-dom';
import useItems from '../../Hooks/useItems';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ManageItems = () => {

    // custom hook 
    const [items, setItems] = useItems();


    // navigate tp single item
    const navigate = useNavigate();
    const navigateToSingleItem = id => {
        navigate(`/inventory/${id}`);
    }

    // if user wants to delete items 
    const handleDelete = id => {
        const confirmation = window.confirm('Are you sure?');
        if (confirmation) {
            const url = `http://localhost:5000/perfume/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const remainedItems = items.filter(item => item._id !== id);
                setItems(remainedItems);
                toast('deleted');
            })
        }
    }

    return (
        <div className='py-5'>
            <h1 className='item-title pt-3 pb-5 fw-bold text-dark'>Inventory Items</h1>
            <div className="container">
                <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4'>
                    {
                        items.map(item => <div className='col' key={item._id}>
                            <div className="card h-100 shadow">
                                <img src={item.img} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title fw-bold">{item.name}</h5>
                                    <p className="card-text"><small>{item.description}</small></p>
                                    <p className='text-danger fw-bold'>Price: ৳{item.price}</p>
                                    <p className='text-primary fw-bold'><small>Quantity: {item.quantity}</small></p>
                                    <p className='text-success fw-bold'><small>Supplier: {item.supplier}</small></p>
                                </div>
                                <div className="text-center bg-white py-3">
                                    <Button onClick={() => handleDelete(item._id)} className='btn btn-danger text-white fw-bold me-2'>Delete</Button>
                                    <button onClick={() => navigateToSingleItem(item._id)} className='btn btn-dark text-white'>Update</button>
                                </div>
                            </div>
                            <ToastContainer />
                        </div>
                        )
                    }
                </div>
            </div>
            <div className='text-center mt-5'>
                <Link to='/additem' style={{ backgroundColor: 'green' }} className='btn rounded btn-lg text-white fw-bold'>Add New Item</Link>
            </div>
        </div>
    );
};

export default ManageItems;

