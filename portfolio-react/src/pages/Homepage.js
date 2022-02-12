import React from 'react';
import { GiConverseShoe } from 'react-icons/gi';
import { FaGamepad } from 'react-icons/fa';
import { BiCameraMovie } from 'react-icons/bi'

function Homepage() {
    return (
        <article>
            <h2>Welcome to the all-in-one page with shops and tools!</h2>
            <GiConverseShoe className="iconSize" />
            <FaGamepad className="iconSize" />
            <BiCameraMovie className="iconSize" />
        </article>
    )
}

export default Homepage