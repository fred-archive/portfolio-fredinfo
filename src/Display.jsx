import React from 'react';
import fred from './assets/fred.png';

export const Display = () => {
    return (
        <div className='flex'>
        <div className='display'>
            <div className='pink'>
            <img src={fred} alt="" />
            </div>
            <h1>Fred Davison</h1>
            <h4>web developer</h4>
        </div>
        </div>
    )
}