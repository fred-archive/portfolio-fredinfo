import React from 'react';
import fred from './assets/fred.png';

export const Display = () => {
    return (
        <div className='display'>
            <h1>Fred Davison</h1>
            <h4>web developer</h4>
            <div className='pink'>
            <img src={fred} alt="" />
            </div>
            <div className='about'>
                <h2>about</h2>
            </div>
        </div>
    )
}