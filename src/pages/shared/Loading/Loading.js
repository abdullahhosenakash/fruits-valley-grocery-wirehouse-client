import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
    return (
        // <div style={{ height: '400px' }} className='d-flex align-items-center justify-content-center'>
        //     <Spinner animation="border" />
        // </div>
        <div style={{ height: '400px' }} className='position-absolute top-50 start-50'>
            <Spinner animation="border" />
        </div>
    );
};

export default Loading;