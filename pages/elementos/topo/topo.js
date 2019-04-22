import React, { Component } from 'react';
import Menu from "./menu";
import css from "../../../styles.scss"

import { Container,Row, Col } from 'react-bootstrap';

class Topo  extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
        <header className={css.topo}>
            <Container>
            <Row>
                <Col sm={12} lg={4}> <img className={css.logo} src="/static/img/logo.png" alt="CyberVestibular" /> </Col>
                <Col sm={12} lg={8}><Menu/></Col>                
            </Row>
            </Container>
        </header>

        )
    }
}
 
export default Topo ;