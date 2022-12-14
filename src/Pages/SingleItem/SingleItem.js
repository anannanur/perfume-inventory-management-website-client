import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const SingleItem = () => {
    const { id } = useParams();
    const [item, setItem] = useState({});

    useEffect(() => {
        const url = `https://perfume-inventory-management-website-server.vercel.app/perfume/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data))
    }, [id]);

    // handling delivered button 
    const confirmDelivered = () => {
        if (item.quantity < 1) {
            alert('You cant decrease the quantity anymore');
            return;
        }
        let newQuantity = item.quantity - 1;
        const newItem = { ...item, quantity: newQuantity };
        setItem(newItem);
        fetch(
            `https://perfume-inventory-management-website-server.vercel.app/perfume/${id}`,
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newItem),
            }
        );
        alert('Delivered!,So, item quantity has been decreased.')
    }

    // handling quantity increasing /decreasing
    const handleQuantity = (event) => {
        event.preventDefault();

        const newAddedQuantity = event.target.quantity.value;
        if (newAddedQuantity <= 0) {
            alert('Input a valid quantity')
            event.target.addQuantity.value = "";
        }
        else {
            event.preventDefault();
            const itemValue = parseInt(newAddedQuantity);
            const oldQuantity = parseInt(item.quantity);
            console.log(itemValue, oldQuantity);
            let newQuantity = oldQuantity + itemValue;
            const newItem = { ...item, quantity: newQuantity };
            setItem(newItem);

            fetch(
                `https://perfume-inventory-management-website-server.vercel.app/perfume/${id}`,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(newItem),
                }
            );
            //reset form
            alert("Done!", "Quantity added successfully!");
            event.target.quantity.value = "";
        }
    };

    return (
        <div className='container py-5'>
            <div className="card py-5 shadow-lg rounded">
                <div className="row g-0">
                    <h1 className='text-center text-dark fw-bold pb-3'>Item Details</h1>
                    <div className="col-md-4 mt-4" style={{ textAlign: 'center' }}>
                        <img src={item?.img} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h4 className="card-title fw-bold" style={{ color: 'goldenrod' }}>{item?.name}</h4>
                            <p className="card-text text-muted">{item?.description}</p>
                            <p className="card-text"><small className="text-dark fw-bold">id: {item?._id}</small></p>
                            <p className="card-text"><small className="text-secondary fw-bold">Sold: {item.quantity < 1 ? "Yes" : "No"}</small></p>
                            <p className="card-text"><small className="text-primary fw-bold">Quantity: {item?.quantity}</small></p>
                            <p className="card-text"><small className="text-danger fw-bold">Price: ৳{item?.price}</small></p>
                            <p className="card-text"><small className="text-success fw-bold">Supplier: {item?.supplier}</small></p>
                            <button onClick={confirmDelivered} className='btn btn-danger'>Delivered</button>

                        </div>
                        <div className='d-flex ms-3'>
                            <form onSubmit={handleQuantity} className="d-flex">
                                <input className="form-control w-50 me-2" type="number" name="quantity" id="" placeholder='Add quantity' />
                                <button className='btn btn-success'>Restock</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className='text-center mt-5'>
                <Link to="/manageitems" className="btn btn-dark text-white fw-bold">Manage Inventories</Link>
            </div>
        </div>

    );
};

export default SingleItem;