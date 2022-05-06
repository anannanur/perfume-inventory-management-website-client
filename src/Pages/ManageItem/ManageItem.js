import React from 'react';
import { useNavigate } from 'react-router-dom';

const ManageItem = ({ item }) => {
    const { _id, name, img, description, price, quantity, supplier } = item;
    const navigate = useNavigate();
    const navigateToSingleItem = id => {
        navigate(`/inventory/${id}`);
    }
    return (
        <div className='col'>
            {/* <img src={img} alt="" />
            <h5 className='fw-bold'>{name}</h5>
            <p className='text-secondary'><small>{description}</small></p>
            <p className='text-danger fw-bold'>Price: ৳{price}</p>
            <p className='text-primary fw-bold'><small>Quantity: {quantity}</small></p>
            <p className='text-success fw-bold'><small>Supplier: {supplier}</small></p> */}
           
    <div className="card h-100 shadow">
      <img src={img} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title fw-bold">{name}</h5>
        <p className="card-text"><small>{description}</small></p>
        <p className='text-danger fw-bold'>Price: ৳{price}</p>
        <p className='text-primary fw-bold'><small>Quantity: {quantity}</small></p>
        <p className='text-success fw-bold'><small>Supplier: {supplier}</small></p>
      </div>
      <div className="text-center bg-white py-3">
          <button className='btn btn-danger text-white fw-bold me-2'>Delete</button>
          <button onClick={() => navigateToSingleItem(_id)} className='btn btn-dark text-white'>Update</button>
      </div>
    </div>
  

            {/* <button onClick={() => navigateToSingleItem(_id)} className='btn-style'>Stock Update</button> */}
        </div>
    );
};

export default ManageItem;