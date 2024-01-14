import React from 'react';
import Story from '../Story/Story';
import './Newsfeed.css'
const NewsFeed = () => {
    return (
        <div className='newsfeed-container h-screen overflow-y-auto'>
           <Story></Story>
        </div>
    );
};

export default NewsFeed;