import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruckFast, faArrowRight, faUsers, faIndustry } from '@fortawesome/free-solid-svg-icons'
import React from 'react';

const AdvancedFeatures = () => {
    return (
        <div className='container'>
            <h2 className='display-5 text-center'>Advanced features made simple</h2>
            <p className="text-muted text-center">Use cutting-edge automation and advanced routes to manage any warehouse.</p>
            <div className='d-flex flex-column flex-lg-row align-items-center justify-content-around my-5'>
                <div className='display-6 text-center'>
                    <FontAwesomeIcon className='me-3' icon={faTruckFast}></FontAwesomeIcon>
                    <FontAwesomeIcon className='me-4' icon={faArrowRight}></FontAwesomeIcon>
                    <FontAwesomeIcon className='' icon={faUsers}></FontAwesomeIcon>
                    <p className='fs-4 mt-2'>Drop Shipping</p>
                </div>
                <div className='display-6 text-center'>
                    <FontAwesomeIcon className='me-3' icon={faTruckFast}></FontAwesomeIcon>
                    <FontAwesomeIcon className='me-4' icon={faArrowRight}></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faTruckFast}></FontAwesomeIcon>
                    <p className='fs-4 mt-2'>Cross Docking</p>
                </div>
                <div className='display-6 text-center'>
                    <FontAwesomeIcon className='me-3' icon={faIndustry}></FontAwesomeIcon>
                    <FontAwesomeIcon className='me-4' icon={faArrowRight}></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faIndustry}></FontAwesomeIcon>
                    <p className='fs-4 mt-2'>Multi-Warehouse</p>
                </div>

            </div>
        </div>
    );
};

export default AdvancedFeatures;