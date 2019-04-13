import React, { Component } from 'react';
import Menu from "./menu";

import { Container,Row, Col } from 'react-bootstrap';

class Topo  extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
        <header>
            <Container>
            <Row>
                <Col sm={12} lg={3}> Logo </Col>
                <Col sm={12} lg={9}><Menu/></Col>                
            </Row>
            </Container>
        </header>

        )
    }
}
 
export default Topo ;