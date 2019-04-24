import React, { Component } from 'react';
import { Container,Row, Col } from 'react-bootstrap';
import css from "../../../styles.scss"
class Rodape  extends Component {
    state = {  }
    render() { 
        return ( 
            <footer className={css.rodape}>
                <Container>
                <Row>
                    <Col sm={6} lg={3}>Logo</Col>
                    <Col sm={6} lg={3}>Logo</Col>
                    <Col sm={6} lg={3}>Logo</Col>
                    <Col sm={6} lg={3}>Logo</Col>              
                </Row>
                </Container>
            </footer>
);
    }
}
 
export default Rodape;