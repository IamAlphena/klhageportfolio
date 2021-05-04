import React from 'react';
import Card from 'react-bootstrap/Card';
import Quiz from '../../images/quiz1.png';

function ExampleCard(){
    return(
        <Card style={{width: '18rem'}}>
            <Card.Img variant="top" src={Quiz} alt="Quiz Preview" />
            <Card.Title>Coding Quiz</Card.Title>
        </Card>
    )
}

export default ExampleCard;