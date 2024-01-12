import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

const Root = () => {
    return (
        <div className='m-4'>
            <Navbar></Navbar>
           <Outlet></Outlet>
        </div>
    );
};

export default Root;