import React, { useState } from 'react';
import {Header} from './Header';

export const Fred = () => {
    const [showAbout, toggleAbout] = useState(true);

    return (
        <div>
            <Header/>
            <div className='body'>
            {/* <hr /> */}
            <nav>
                <div onClick={() => toggleAbout(true)} className={`block ${showAbout && 'selected'}`} >
                <h3>about</h3>
                </div>
                <div onClick={() => toggleAbout(false)} className={`block ${!showAbout && 'selected'}`}>
                <h3 >projects</h3>
                </div>
            </nav>
            {/* <hr/> */}
            {showAbout ? <div className='boxes'>about...</div> : (
                <div className='boxes'>
                <div className="box"></div>
                <div className="box"></div>
                {/* <div className="box"></div> */}
            </div>
            )}
            </div>
            <footer></footer>
        </div>
    )
}