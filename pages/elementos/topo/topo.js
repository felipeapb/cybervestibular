import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Menu from './menu';
import Logado from './logado';
import css from '../../../styles.scss';


class Topo extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
    return (
      <div>
        <Logado />

        <header className={css.topo}>
          <Container>
            <Row>
              <Col sm={12} lg={4}>
                {' '}
                <img className={css.logo} src="/static/img/logo.png" alt="CyberVestibular" />
                {' '}
              </Col>
              <Col sm={12} lg={8}><Menu /></Col>
            </Row>
          </Container>
        </header>
      </div>
    );
  }
}

export default Topo;
