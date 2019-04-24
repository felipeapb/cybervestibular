import React, { Component } from 'react';
import { Container,Row, Col, Card } from 'react-bootstrap';
import css from "../../../styles.scss"
import Faker from 'faker';
Faker.locale = "pt_Br";

class Noticias  extends Component {

    state = {  }
    render() { 
        return ( 
            <Container>
                 <h2 className={css.h2_destaque}>NOTÍCIAS</h2>
                <Row>
                    
                    <Col sm={12} lg={4}>
                    <Card>
                        <Card.Img st variant="top" src="http://www.sejabixo.com.br/vestibular/images/medicina_veterinaria.jpg" />
                        <Card.Body >
                        <Card.Title><a href="">Técnica Pomodoro</a></Card.Title>
                           
                            <Card.Text>
                            Aumente sua produtividade nos estudos com a Técnica Pomodoro
                            </Card.Text>
                        </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={12} lg={8}>
                   <Row>
                    <Col sm={12} lg={6}>
                    <Card className={css.destaques_cartao}>
                        <Card.Img st variant="top" src="https://d1dh93s7n44ml6.cloudfront.net/blog/wp-content/uploads/2015/09/13062911/Pomodoro-Technique.png" />
                        <Card.Body className={css.body_destaque} >
                        <Card.Title><a href="">Técnica Pomodoro</a></Card.Title>
                            <Card.Text>
                            Aumente sua produtividade nos estudos com a Técnica Pomodoro
                            </Card.Text>
                        </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={12} lg={6}>
                    <Card className={css.destaques_cartao}>
                        <Card.Img st variant="top" src="https://d1dh93s7n44ml6.cloudfront.net/blog/wp-content/uploads/2015/09/13062911/Pomodoro-Technique.png" />
                        <Card.Body className={css.body_destaque} >
                        <Card.Title><a href="">Técnica Pomodoro</a></Card.Title>

                            <Card.Text>
                            Aumente sua produtividade nos estudos com a Técnica Pomodoro
                            </Card.Text>
                        </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={12} lg={6}>
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
                    <Col sm={12} lg={6}>
                    <Card className={css.destaques_cartao}>
                        <Card.Img st variant="top" src="https://d1dh93s7n44ml6.cloudfront.net/blog/wp-content/uploads/2015/09/13062911/Pomodoro-Technique.png" />
                        <Card.Body className={css.body_destaque} >
                        <Card.Title><a href="">Técnica Pomodoro</a></Card.Title>
      <Card.Text>
                            Aumente sua produtividade nos estudos com a Técnica Pomodoro
                            </Card.Text>
                        </Card.Body>
                        </Card>
                    </Col>
          
                </Row>
                    </Col>
            
                </Row>
            </Container>
);
    }
}
 
export default Noticias;