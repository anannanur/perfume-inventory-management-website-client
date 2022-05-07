import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const MyItem = () => {

    const [user] = useAuthState(auth);
    const [myItems, setmyItems] = useState([]);
    useEffect(() => {
        const email = user.email;
        console.log(email);
        const url = `http://localhost:5000/myitem?email=${email}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setmyItems(data))
    }, [user]);

    const handleDelete = id => {
        const confirm = window.confirm('Are you sure?');
        if (confirm) {
            const url = `http://localhost:5000/myitem/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remainedItems = myItems.filter(item => item._id !== id);
                    setmyItems(remainedItems);
                    toast('deleted');
                })
            const url2 = `http://localhost:5000/perfume/${id}`;
            fetch(url2, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remainedItems = myItems.filter(item => item._id !== id);
                    setmyItems(remainedItems);
                    toast('deleted');
                })
        }
    }

    return (
        <div className='py-5'>
            <h1 className='item-title pt-3 pb-5 fw-bold text-dark'>My Items</h1>
            <div className="container">
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                    {
                        myItems.map(myItem => <div key={myItem._id} className="col">
                            <div className="card h-100 shadow">
                                <img src={myItem.img} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title fw-bold">{myItem.name}</h5>
                                    <p className="card-text"><small>{myItem.description}</small></p>
                                    <p className='text-danger fw-bold'>Price: ৳{myItem.price}</p>
                                    <p className='text-primary fw-bold'><small>Quantity: {myItem.quantity}</small></p>
                                    <p className='text-success fw-bold'><small>Supplier: {myItem.supplier}</small></p>
                                </div>
                                <div className="text-center bg-white py-3">
                                    <button onClick={() => handleDelete(myItem._id)} className='btn btn-danger text-white fw-bold me-2'>Delete</button>
                                    <button className='btn btn-dark text-white'>Update</button>
                                </div>
                            </div>
                            <ToastContainer />
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default MyItem;