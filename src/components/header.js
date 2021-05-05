import React from 'react';
import selfie from '../images/selfie.jpg'


function Header() {
    return (
        <div className="break">
            <div className="photo">
                <img src={selfie} alt="self" />
            </div>
            <div className="name">
                {/* Kim Hage */}
            </div>
        </div>
    )
}

export default Header;