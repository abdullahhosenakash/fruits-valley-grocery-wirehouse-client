import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import UserVerification from '../Login/UserVerification/UserVerification';
import ManageInventory from '../ManageInventory/ManageInventory';
import Loading from '../shared/Loading/Loading';
import PageTitle from '../shared/PageTitle/PageTitle';
import './ManageInventories.css';

const ManageInventories = () => {
  const [user] = useAuthState(auth);
  UserVerification(user);
  const [allItems, setAllItems] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(
      'https://fruits-valley-wirehouse-server-b30buiedp.vercel.app/services'
    )
      .then((res) => res.json())
      .then((data) => {
        setAllItems(data);
        setLoading(false);
      });
  }, []);

  const handleDeleteButton = (_id) => {
    const proceed = window.confirm('Are you sure you want to delete?');
    if (proceed) {
      const url = `https://fruits-valley-wirehouse-server-b30buiedp.vercel.app/services/${_id}`;
      fetch(url, {
        method: 'delete'
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            const remaining = allItems.filter((item) => item._id !== _id);
            setAllItems(remaining);
            toast('Item Deleted!');
          }
        });
    }
  };

  return (
    <div>
      {loading && <Loading></Loading>}
      <PageTitle title='Manage Inventories'></PageTitle>
      <div className='row justify-content-center mx-auto'>
        <h2 className='text-center display-6 mb-3 mt-3'>
          Manage Inventories ({allItems.length})
        </h2>

        <Table striped bordered hover className='inventories-table'>
          <thead>
            <tr className='text-center'>
              <th className='display-custom-sm-none'>Item ID</th>
              <th>Item Name</th>
              <th className='display-custom-sm-none'>Quantity</th>
              <th className='display-custom-sm-none'>Price</th>
              <th>Supplier</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {allItems.map((item) => (
              <ManageInventory
                key={item._id}
                item={item}
                handleDeleteButton={handleDeleteButton}
              ></ManageInventory>
            ))}
          </tbody>
        </Table>
      </div>
      <Link
        to='/add-inventory'
        className='btn btn-secondary add-new-button d-block mx-auto mb-5'
      >
        Add New Item
      </Link>
    </div>
  );
};

export default ManageInventories;
