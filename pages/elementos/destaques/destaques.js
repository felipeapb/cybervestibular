import React, { Component } from 'react';
import { Container, Row, Col, Card  } from 'react-bootstrap';
import css from "../../../styles.scss"

class Destaques  extends Component {
    state = {  }
    render() { 
        return ( 
            <Container>
                <h2 className={css.h2_destaque}>DESTAQUES</h2>
                <Row>
                <Col sm={12} lg={4}>
                    <Card className={css.destaques_cartao}>
                        <Card.Img st variant="top" src="https://www.tomatotimers.com/IMAGE%20FILE/Infographic.svg" />
                        <Card.Body className={css.body_destaque} >
                            <Card.Title><a href="">Técnica Pomodoro</a></Card.Title>
                            <Card.Text>
                            Aumente sua produtividade nos estudos com a Técnica Pomodoro
                            </Card.Text>
                        </Card.Body>
                        </Card>
                    </Col>                    <Col sm={12} lg={4}>
                    <Card className={css.destaques_cartao}>
                        <Card.Img st variant="top" src="https://www.tomatotimers.com/IMAGE%20FILE/Infographic.svg" />
                        <Card.Body className={css.body_destaque} >
                            <Card.Title><a href="">Técnica Pomodoro</a></Card.Title>
                            <Card.Text>
                            Aumente sua produtividade nos estudos com a Técnica Pomodoro
                            </Card.Text>
                        </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={12} lg={4}>
                    <Card className={css.destaques_cartao}>
                        <Card.Img st variant="top" src="https://www.tomatotimers.com/IMAGE%20FILE/Infographic.svg" />
                        <Card.Body className={css.body_destaque} >
                            <Card.Title><a href="">Técnica Pomodoro</a></Card.Title>
                            <Card.Text>
                            Aumente sua produtividade nos estudos com a Técnica Pomodoro
                            </Card.Text>
                        </Card.Body>
                        </Card>
                    </Col>
      
                </Row>
            </Container>
);
    }
}
 
export default Destaques;