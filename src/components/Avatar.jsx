import React from 'react';

export default function Avatar({ image, NEW }) {
    return (
        <div className='avatar'>
            <img
                className='photo'
                src={image}
                alt="avatar" />
            {NEW && <span className='newpeople'>NEW</span>}
        </div>
    );
}

