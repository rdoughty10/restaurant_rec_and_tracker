import React from 'react';
import './ButtonSearch.css'
import { Link } from 'react-router-dom'

export function Button() {
    return (
        <Link to='login'>
            <button className='btnSearch'>Search</button>
        </Link>
    );
}