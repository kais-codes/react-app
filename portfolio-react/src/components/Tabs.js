import { Link } from 'react-router-dom';
import React from 'react';

function Tabs() {
    return (
        <nav>
            <Link to='/'>Homepage</Link>
            <Link to='/Items'>Items</Link>
            <Link to='/Stores'>Stores</Link>
        </nav>
    )
}

export default Tabs