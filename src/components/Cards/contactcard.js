import React from 'react';
import { ListGroup } from 'react-bootstrap';
import Card from 'react-bootstrap/Card'

function ContactCard(props){
    return (
        <Card.Body className="about">
            <Card.Header>{props.format}</Card.Header>
            <ListGroup variant="flush">
                <ListGroup.Item>{props.details}</ListGroup.Item>
            </ListGroup>
        </Card.Body>
    )
}

export default ContactCard;