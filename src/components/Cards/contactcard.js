import React from 'react';
import Card from 'react-bootstrap/Card'

function ContactCard(props){
    return (
        <Card.Body className="about">
            <Card.Header>{props.format}</Card.Header>
            <Card.Text>
            <a href={props.details}> Link </a>
            </Card.Text>
          
        </Card.Body>
    )
}

export default ContactCard;

