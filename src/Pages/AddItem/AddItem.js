import React, { useState } from 'react';
import img from '../../images/additem.jpg';
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import './AddItem.css';

const AddItem = () => {
    // react hook form for adding item 
    const { register, handleSubmit } = useForm();
    const [val, setVal] = useState();
    const [user] = useAuthState(auth);

    const onSubmit = data => {
        console.log(data);
        const url = `https://perfume-inventory-management-website-server.vercel.app/perfume`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    toast('New Item Added');
                    setVal('');
                }
            }
        )
    }

return (
    <div className='addItem bg-dark pt-2 pb-5'>
        <h2 className='text-warning text-center pt-2 pb-4 fw-bold'>Add New Item</h2>
        <div className="container">
            <div className="row d-flex">
                <div className="col-12 col-md-6 mt-3 order-2 order-md-1 mt-2">
                    <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
                        <input style={{ border: 'none' }} value={user?.email} className='mb-3 rounded p-2 bg-light' {...register("email")} readOnly />
                        <input style={{ border: 'none' }} value={val} className='mb-3 rounded p-2 bg-light' autoComplete='off' placeholder='Enter name' {...register("name", { required: true })} />
                        <input style={{ border: 'none' }} value={val} className='mb-3 rounded p-2 bg-light' autoComplete='off' placeholder='Enter photo url' {...register("img")} />
                        <textarea style={{ border: 'none' }} value={val} className='mb-3 rounded p-2 bg-light' placeholder='Enter description' {...register("description")} />
                        <input style={{ border: 'none' }} value={val} className='mb-3 rounded p-2 bg-light' placeholder='Enter price' type="number" {...register("price")} />
                        <input style={{ border: 'none' }} value={val} className='mb-3 rounded p-2 bg-light' placeholder='Enter quantity' type="number" {...register("quantity")} />
                        <input style={{ border: 'none' }} value={val} className='mb-3 rounded p-2 bg-light' placeholder='Enter sold quantity' type="number" {...register("sold")} />
                        <input style={{ border: 'none' }} value={val} className='mb-3 rounded p-2 bg-light' autoComplete='off' placeholder='Enter supplier' {...register("supplier")} />

                        <div className='text-center mt-2'>
                            <input className="w-50 btn btn-warning fw-bold text-dark" value='Add item' type="submit" />
                        </div>
                    </form>
                </div>
                <div className="col-12 col-md-6 text-center order-1 order-md-2 mt-3">
                    <img src={img} alt="" className='img-fluid ' />
                </div>
                <ToastContainer />
            </div>
        </div>
    </div>
);
};

export default AddItem;