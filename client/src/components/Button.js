import React from 'react';
import './Button.css'
import { Link } from 'react-router-dom'

export function Button() {
    return (
        <Link to='login'>
            <button className='btn'>Register/Sign-In</button>
        </Link>
    );
}