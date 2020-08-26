import React from 'react';
import fred from './assets/fred.png';

export const Display = () => {
    return (
        <div className='flex'>
            <div className='display'>
                <div className='pink'>
                    <img src={fred} alt="" />
                </div>
                <div>
                    <h1>Fred Davison</h1>
                    <h4>web developer</h4>
                    <a href='https://github.com/fdavison1' target='_blank' rel="noopener noreferrer">
                        <i class="fab fa-github"></i>
                    </a>
                    <a href='https://www.linkedin.com/in/fdavison1/' target='_blank' rel="noopener noreferrer">
                        <i class="fab fa-linkedin"></i>
                    </a>
                </div>
            </div>
        </div>
    )
}