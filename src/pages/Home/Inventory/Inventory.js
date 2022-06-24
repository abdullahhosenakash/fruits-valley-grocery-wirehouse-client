import React from 'react';
import { Link } from 'react-router-dom';
import './Inventory.css';

const Inventory = ({ item }) => {
    const { _id, itemName, img, description, quantity, price, supplier } = item;
    return (
        <div className="card col-sm-12 col-lg-4 card-width">
            <img src={img} className="card-img-top rounded-3 mt-2 item-img" alt="..." />
            <div className="card-body">
                <h4 className="card-title">{itemName}</h4>
                <p className="card-text">{description}</p>
                <h5>Quantity: {quantity}</h5>
                <h5>Price: ${price}</h5>
                <h6>Supplier: {supplier}</h6>
            </div>
            <div className="card-footer border-0 bg-white d-flex justify-content-center">
                <Link to={`/inventory/${_id}`} className='btn btn-secondary w-75'>Update</Link>
            </div>
        </div>

    );
};

export default Inventory;