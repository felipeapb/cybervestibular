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

    <Carousel.Caption className={css.textSlide}>
      <h3>Enem Inicia inscrições</h3>
      <p>Nulla vitae elit libero, a pharetraz augue mollis interdum.</p>
    </Carousel.Caption>
    <img
      className={css.imgSlide}
      src="/static/img/moca.png"
      alt="First slide"
    />
  </Carousel.Item>

  
</Carousel>
</Container>
</section>
)     
    }
}
 
export default Topo ;