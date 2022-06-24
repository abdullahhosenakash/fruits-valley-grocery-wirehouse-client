import React from 'react';
import './LearnMore.css';

const LearnMore = () => {
    return (
        <div className='container my-5 d-flex flex-column flex-lg-row align-items-center p-4 rounded gap-4 custom-bg-color'>
            <div>
                <iframe className='rounded youtube-video' src="https://www.youtube.com/embed/ANxjuXUpItg" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
            <div>
                <h2 className='display-6'>What we are working</h2>
                <p>Fruits are an essential part of human being. That's why fruits safety and supply should be in a good way. We are working for it.</p>
                <button className="btn btn-secondary d-block w-50 learn-more-button">Learn More</button>
            </div>
        </div>
    );
};

export default LearnMore;