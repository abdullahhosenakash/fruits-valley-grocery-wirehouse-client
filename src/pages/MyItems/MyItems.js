import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import useItems from '../../hooks/useItems';
import MyItem from '../MyItem/MyItem';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import UserVerification from '../Login/UserVerification/UserVerification';
import PageTitle from '../shared/PageTitle/PageTitle';
import Loading from '../shared/Loading/Loading';

const MyItems = () => {
    const [items, setItems, loading] = useItems();
    const [user] = useAuthState(auth);
    const [userStoredItems, setUserStoredItems] = useState([]);
    const [storedItems, setStoredItems] = useState([]);
    const [itemAvailable, setItemAvailable] = useState(false);
    UserVerification(user);
    useEffect(() => {
        const userItems = items?.filter(item => item.supplier === (user?.email).split("@")[0]);
        setUserStoredItems(userItems);
        userItems.length ? setItemAvailable(true) : setItemAvailable(false);
    }, [items, user?.email]);

    const handleDeleteButton = _id => {
        const proceed = window.confirm('Are you sure you want to delete?');
        if (proceed) {
            const url = `https://pure-atoll-61316.herokuapp.com/services/${_id}`;
            fetch(url, {
                method: 'delete'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const remaining = storedItems.filter(item => item._id !== _id);
                        setStoredItems(remaining);

                        const userRemainingItems = userStoredItems?.filter(userStoredItem => userStoredItem._id !== _id);
                        setUserStoredItems(userRemainingItems);
                        !userRemainingItems.length && setItemAvailable(false);
                        toast('Item Deleted!');
                    }
                });
        }
    }
    return (
        <div>
            <PageTitle title="My Items"></PageTitle>
            <div className='row justify-content-center mx-auto'>
                <h2 className='text-center display-6 mb-3 mt-3'>My Items</h2>
                {loading && <Loading></Loading>}
                {!loading && !itemAvailable && <h3 className='display-4 text-center my-5 text-danger'>oops... You have no item!</h3>}
                {
                    userStoredItems.map(userItem =>
                        <MyItem
                            key={Math.random()}
                            userItem={userItem}
                            handleDeleteButton={handleDeleteButton}
                        ></MyItem>
                    )
                }
            </div>
        </div>
    );
};

export default MyItems;