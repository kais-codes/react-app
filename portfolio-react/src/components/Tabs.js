import { Link } from 'react-router-dom';
import React from 'react';

function Tabs() {
    return (
        <nav>
            <Link to='/'>Homepage</Link>
            <Link to='/Items'>Items</Link>
            <Link to='/Stores'>Stores</Link>
            <Link to='/Weather'>Weather</Link>
        </nav>
    )
}

export default Tabs