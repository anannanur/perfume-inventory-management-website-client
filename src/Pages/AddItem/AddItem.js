import React from 'react';
import img from '../../images/additem.jpg';
import { useForm } from "react-hook-form";

const AddItem = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        const url = `http://localhost:5000/perfume`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })
    };
    return (
        <div className='bg-dark pb-4'>
            <h2 className='text-info text-center pt-2 pb-4 fw-bold'>Add New Item</h2>
            <div className="container">
                <div className="row d-flex">
                    <div className="col-12 col-md-6 mt-3 order-2 order-md-1 mt-2">
                        <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
                            <input style={{ border: 'none' }} className='mb-3 rounded p-2 bg-light' placeholder='Enter name' {...register("name", { required: true })} />
                            <input style={{ border: 'none' }} className='mb-3 rounded p-2 bg-light' placeholder='Enter photo url' {...register("img")} />
                            <textarea style={{ border: 'none' }} className='mb-3 rounded p-2 bg-light' placeholder='Enter description' {...register("description")} />
                            <input style={{ border: 'none' }} className='mb-3 rounded p-2 bg-light' placeholder='Enter price' type="number" {...register("price")} />
                            <input style={{ border: 'none' }} className='mb-3 rounded p-2 bg-light' placeholder='Enter quantity' type="number" {...register("quantity")} />
                            <input style={{ border: 'none' }} className='mb-3 rounded p-2 bg-light' placeholder='Enter supplier' {...register("supplier")} />
                            <input className="btn btn-outline-info fw-bold text-white" type="submit" value="Add Item" />
                        </form>
                    </div>
                    <div className="col-12 col-md-6 text-center order-1 order-md-2">
                        <img src={img} alt="" className='img-fluid ' />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AddItem;