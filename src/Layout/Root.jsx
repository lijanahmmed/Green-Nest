import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';

const Root = () => {
    return (
        <div className='flex flex-col min-h-screen'>
            <div className='bg-green-100 shadow-sm'>
                <Navbar></Navbar>
            </div>
            <div className='flex-1'>
                <Outlet></Outlet>
            </div>
            <div className='bg-gray-300 mt-15'>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Root;