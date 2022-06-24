import React from 'react';
import PageTitle from '../shared/PageTitle/PageTitle';

const NotFound = () => {
    return (
        <div className='text-danger text-center mt-5'>
            <PageTitle title="404 Not Found"></PageTitle>
            <h1>OOPS!</h1>
            <img className='w-50' src="https://i.ibb.co/1KH8Zpj/404.jpg" alt="" />
            <h2>The page you are finding is not found..</h2>
        </div>
    );
};

export default NotFound;