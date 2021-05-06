import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <>
            <nav>
                <Link to="/About">About Me</Link>
                <Link to="/Contact">Contact Me</Link>
                <Link to="/Examples">Previous work</Link>
            </nav>
            <div className="spacer"></div>
        </>
    )
}
export default Navbar;