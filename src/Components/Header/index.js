import React from 'react';
import selfie from '../../images/updatedselfie.jpg'


function Header() {
    return (
     <div className="break tile">
            <div className="photo">
                <img src={selfie} alt="self" />
            </div>
            <div className="textspace">
            <div className="writer">
                <h1>Nice to meet you!</h1>
            </div>
            </div>
        </div>
    )
}

export default Header;