import React from 'react';
import { ListGroup } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

function ListCard(){
   return( 
   <Card.Body className="about">
    <Card.Header>Proficent With</Card.Header>
    <ListGroup variant="flush">
        <ListGroup.Item className="item">HTML</ListGroup.Item>
        <ListGroup.Item className="item"> CSS</ListGroup.Item>
        <ListGroup.Item className="item"> JavaScript</ListGroup.Item>
        <ListGroup.Item className="item"> JQuery</ListGroup.Item>
        <ListGroup.Item className="item"> React</ListGroup.Item>
        <ListGroup.Item className="item"> Node</ListGroup.Item>
        <ListGroup.Item className="item"> MySQL</ListGroup.Item>
        <ListGroup.Item className="item"> MongoDB</ListGroup.Item>
    </ListGroup>
</Card.Body>
   )
}

export default ListCard;