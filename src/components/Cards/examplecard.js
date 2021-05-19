import React from 'react';
import Card from 'react-bootstrap/Card';


function ExampleCard(props) {
    return (
        <>
            <Card
                className='bg-dark text-white'
                style={{ width: '18rem', margin: '1rem' }}
            >
                <Card.Img src={props.image} alt={props.alttext} className="work" />
                <Card.Title>{props.project}</Card.Title>
                <Card.Text>{props.details}</Card.Text>
                <Card.Text><a href={props.deploy} target="__blank">Link to Deployed Application</a></Card.Text>
                <Card.Text><a href={props.repo} target="__blank">Link to Repo</a></Card.Text>
                <Card.Text>Built with: {props.tech}</Card.Text>
            </Card>
        </>
    )
}

export default ExampleCard;