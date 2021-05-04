import React from 'react';

function Navbar() {
    return (
        <>
            <nav>
                <a href="/About">About Me</a>
                <a href="/Contact">Contact Me</a>
                <a href="/Examples">Previous work</a>
            </nav>
            <div className="spacer"></div>
        </>
    )
}
export default Navbar;