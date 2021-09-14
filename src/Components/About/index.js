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
      <h3 className="darken">Front End Developer</h3>
      <p className="darken">I enjoy taking a new idea and giving it life on screen. </p>
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
      <p className="darken">HTML, CSS, Sass, Javascript, React</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block"
      src={box}
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3 className="darken">Third slide label</h3>
      <p className="darken">Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>

</Carousel> 
</div>
       </>
    )
}

export default About;