import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import box from '../../images/box.png';

function About() {
    return (
        <>
            <div 
    className='carimg'>
    <Carousel>

  <Carousel.Item interval={6000}>


    <img
      className="d-block h-150"
      src={box}
      alt="First slide"
    />    
    <Carousel.Caption>
      <h3 className="darken">Full Stack Developer</h3>
      <p className="darken">I enjoy taking a new idea and giving it life on screen, as well as crafting code that is easy to maintain and update. </p>
    </Carousel.Caption>

  </Carousel.Item>
  <Carousel.Item interval={5000}>
    <img
      className="d-block "
      src={box}
      alt="Second slide"
    />
    <Carousel.Caption>
      <h3 className="darken">Proficent With</h3>
      <p className="darken">HTML, CSS, Javascript, NodeJS, React, MySQL, NoSQL </p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block"
      src={box}
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3 className="darken">Inspired by</h3>
      <p className="darken">New Challenges, new puzzles, and new ideas. All puzzles have a solution, and finding it constantly drives me.</p>
    </Carousel.Caption>
  </Carousel.Item>

</Carousel> 
</div>
       </>
    )
}

export default About;