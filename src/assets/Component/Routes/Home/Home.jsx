import React from 'react';
import LeftNavbar from '../../LeftRoutes/LeftNavbar/LeftNavbar';
import RightRoutes from '../../../RightRoutes/RightRoutes';
import NewsFeed from '../../NewsFeed/NewsFeed/NewsFeed';

const Home = () => {
    return (
        <div className='flex justify-between '>
            <LeftNavbar></LeftNavbar>
            <NewsFeed></NewsFeed>
            <RightRoutes></RightRoutes>
        </div>
    );
};

export default Home;