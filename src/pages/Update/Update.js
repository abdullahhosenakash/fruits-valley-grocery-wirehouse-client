import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import UserVerification from '../Login/UserVerification/UserVerification';
import PageTitle from '../shared/PageTitle/PageTitle';
import './Update.css';

const Update = () => {
  const { id } = useParams();
  const [item, setItem] = useState({});
  const [updatedItem, setUpdatedItem] = useState({});
  const [empty, setEmpty] = useState(false);
  const { itemName, img, description, price, quantity, supplier, _id } = item;

  const [user] = useAuthState(auth);
  UserVerification(user);

  const url = `https://fruits-valley-wirehouse-server.onrender.com/services/${id}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, [updatedItem, url]);

  const newQuantity = parseInt(quantity) - 1;
  const handleDeliveredButton = () => {
    const quantity = newQuantity;
    const newItem = { itemName, img, description, price, quantity, supplier };

    fetch(url, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newItem)
    })
      .then((res) => res.json())
      .then(() => {
        setUpdatedItem(newItem);
        toast('Item updated successfully!');
      });
  };

  const handleRestockButton = (event) => {
    event.preventDefault();
    const restockItem = event.target.quantity.value;
    if (restockItem) {
      const newQuantity = parseInt(quantity) + parseInt(restockItem);
      //putting everything inside if for limiting variable scope
      if (1) {
        const quantity = newQuantity;
        const newItem = {
          itemName,
          img,
          description,
          price,
          quantity,
          supplier
        };

        fetch(url, {
          method: 'PUT',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(newItem)
        })
          .then((res) => res.json())
          .then(() => {
            setUpdatedItem(newItem);
            toast(`${restockItem} item restocked successfully!`);
          });
      }
      setEmpty(false);
    } else {
      setEmpty(true);
    }
    event.target.reset();
  };

  return (
    <div className='container my-3'>
      <PageTitle title='Update Inventory'></PageTitle>
      <h2>Update Info for: {itemName}</h2>
      <div className='d-flex flex-column flex-lg-row align-items-center justify-content-center border gap-4 rounded-3 p-4 '>
        <div>
          <img src={img} alt='' className='rounded-3 img-fluid' />
        </div>
        <div className='update-details'>
          <h4>Name: {itemName}</h4>
          <b>
            <small>Product ID: {_id}</small>
          </b>
          <p>{description}</p>
          <h6>Quantity: {quantity}</h6>
          <h6>Price: ${price}</h6>
          <h6>Supplier: {supplier}</h6>
          <button
            onClick={handleDeliveredButton}
            className='btn btn-secondary delivered-button'
          >
            Delivered
          </button>
        </div>
        <div>
          <Form onSubmit={handleRestockButton}>
            <Form.Group className='mb-3' controlId='formBasicEmail'>
              <Form.Label className='fw-bold'>Restock Item</Form.Label>
              <Form.Control
                onFocus={() => setEmpty(false)}
                type='number'
                name='quantity'
                placeholder='Enter restock quantity'
              />
            </Form.Group>
            {empty ? <p className='text-danger'>Please enter quantity</p> : ''}
            <Button variant='secondary' type='submit'>
              Restock Now
            </Button>
          </Form>
        </div>
      </div>
      <Link
        className='btn btn-secondary my-5 custom-button-width mx-auto d-block'
        to='/inventory'
      >
        Manage Inventories
      </Link>
    </div>
  );
};

export default Update;
