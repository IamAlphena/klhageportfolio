import React from 'react';
import selfie from '../images/selfie.jpg'


function Header() {
    return (
        <div class="break">
            <div class="photo">
                <img src={selfie} alt="self" />
            </div>
            <div class="name">
                Kim Hage
            </div>
        </div>
    )
}

export default Header;