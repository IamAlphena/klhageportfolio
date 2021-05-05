import React from 'react';
import Card from 'react-bootstrap/Card';

function AboutCard() {
    return(
        // <Card className="info">
            <Card.Body className="about" >
                <Card.Title>
                    About Me
                </Card.Title>
                <Card.Text>
                I am a full stack developer, with a passion for interative applications that make it easy to find and access information. I'm constantly fascinated in imagining what is possible, and striving to do and discover more. 
                </Card.Text>
            </Card.Body>
        // </Card>
        )
}

export default AboutCard;