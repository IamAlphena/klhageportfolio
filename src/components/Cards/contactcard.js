import React from 'react';
import { ListGroup } from 'react-bootstrap';
import Card from 'react-bootstrap/Card'

function ContactCard(){
    return (
        <Card style={{width: '18rem'}}>
            <Card.Header>Email</Card.Header>
            <ListGroup variant="flush">
                <ListGroup.Item>kimberly.hage@gmail.com</ListGroup.Item>
            </ListGroup>
        </Card>
    )
}

export default ContactCard;