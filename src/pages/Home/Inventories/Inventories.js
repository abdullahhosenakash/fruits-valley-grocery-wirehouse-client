import React from 'react';
import useItems from '../../../hooks/useItems';
import Inventory from '../Inventory/Inventory';
import PageTitle from '../../shared/PageTitle/PageTitle';
import './Inventories.css';
import Loading from '../../shared/Loading/Loading';

const Inventories = ({ all = true }) => {
    const [items, setItems, loading] = useItems();
    let modifiedItems;
    if (all) {
        modifiedItems = items;
    }
    else {
        modifiedItems = items.slice(0, 6);
    }
    return (
        <div className='row justify-content-center mx-auto inventories'>
            {all ? <PageTitle title="Inventory"></PageTitle> : <PageTitle title=""></PageTitle>}
            {loading && <Loading></Loading>}
            <h2 className='text-center display-6 mb-3 mt-3'>Inventory</h2>
            {
                modifiedItems.map(item => <Inventory
                    key={item._id}
                    item={item}
                ></Inventory>)
            }
        </div>
    );
};

export default Inventories;