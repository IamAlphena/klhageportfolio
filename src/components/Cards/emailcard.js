import React from 'react';
import Card from 'react-bootstrap/Card'

function EmailCard(){
    return (
        <Card.Body className="about">
            <Card.Header>Email</Card.Header>
            <Card.Text>
            <a href="mailto:kimberly.hage@gmail.com"> kimberly.hage@gmail.com </a>
            </Card.Text>
          
        </Card.Body>
    )
}

export default EmailCard;