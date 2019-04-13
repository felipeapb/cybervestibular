import React, { Component } from 'react';
import css from "../../../styles.scss"
import {Carousel, Container,Row, Col } from 'react-bootstrap';

class Topo  extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
     return( 
       <section className={css.slide}>
         <Container>
<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="http://jpcamara.com/wp-content/uploads/2015/02/carousel.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetraz augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <img
      className="d-block w-100"
      src="http://jpcamara.com/wp-content/uploads/2015/02/carousel.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="http://jpcamara.com/wp-content/uploads/2015/02/carousel.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <img
      className="d-block w-100"
      src="http://jpcamara.com/wp-content/uploads/2015/02/carousel.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</Container>
</section>
)     
    }
}
 
export default Topo ;