import React from 'react';
import Avatar from './Avatar';

export default function Profile({ image, name, title, NEW }) {
    return (
        <div className='profile'>
            <Avatar image={image} NEW={NEW} />
            <h1>{name}</h1>
            <p>{title}</p>
        </div>
    );
};

