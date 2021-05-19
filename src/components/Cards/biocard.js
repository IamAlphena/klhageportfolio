import React from 'react';
import Card from 'react-bootstrap/Card';
import paintbrush from '../../images/paintbrushh.png'

function BioCard() {
    return(
        // <Card className="info">
            <Card.Body className="about" >
                <Card.Title>
                    Brief Biography
                </Card.Title>
                <Card.Img src={paintbrush} />
                <Card.Text>
                    Born outside of Detroit, Michigan. <br/>
                    Graduated High School in Warner Robins, Georgia. <br/>
                    Went to Wesleyan College in Macon, Georgia<br/>
                    Graduated with a Bachelors of Science in Theatre, with a minor in music (Cello)<br/>
                    Worked a series of Customer service jobs to include: Gas Stations, Best Buy, Harbor Freight, and Williams Sonoma <br/>
                    Self Taught working with CSS <br/>
                    Certificate in Full Stack Development from University of Arizona

                </Card.Text>
            </Card.Body>
        // </Card>
        )
}

export default BioCard;