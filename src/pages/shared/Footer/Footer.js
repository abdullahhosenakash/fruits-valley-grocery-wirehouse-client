import React from 'react';

const Footer = () => {
    const date = new Date().getFullYear();
    return (
        <div className='text-center mb-5'>
            @ {date} All Rights Reserves
        </div>
    );
};

export default Footer;