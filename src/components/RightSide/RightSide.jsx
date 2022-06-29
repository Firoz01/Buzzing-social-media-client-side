
import React from 'react';
import Navbar from '../Navbar/Navbar';
import TrendCard from '../TrendCard/TrendCard';
import './RightSide.css'


const RightSide = () => {
    return (
        <div className='RightSide'>
            <Navbar />
            <TrendCard />
            <button className='button r-button'>Share</button>
        </div>
    );
};

export default RightSide;