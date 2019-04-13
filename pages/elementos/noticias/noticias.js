import React, { Component } from 'react';
import { Container,Row, Col, Card } from 'react-bootstrap';
import css from "../../../styles.scss"
class Noticias  extends Component {
    state = {  }
    render() { 
        return ( 
            <Container>
                 <h2 className={css.h2_destaque}>NOTÍCIAS</h2>
                <Row>
                    
                    <Col sm={12} lg={4}>
                    <Card>
                        <Card.Img st variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzMJXfrRQNU9R2ZZXtzpnaDUZHFzldV_X-AvNI8SEFx54VK5FXlA" />
                        <Card.Body>
                            <Card.Title>Técnica Pomodoro</Card.Title>
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
                        <Card.Img st variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzMJXfrRQNU9R2ZZXtzpnaDUZHFzldV_X-AvNI8SEFx54VK5FXlA" />
                        <Card.Body>
                            <Card.Title>Técnica Pomodoro</Card.Title>
                            <Card.Text>
                            Aumente sua produtividade nos estudos com a Técnica Pomodoro
                            </Card.Text>
                        </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={12} lg={6}>
                    <Card className={css.destaques_cartao}>
                        <Card.Img st variant="top" src="https://s2.glbimg.com/Jlqi5i7UVaG0-MHHUbi2nqurd5Q=/0x0:720x620/94x94/s.glbimg.com/es/ge/f/original/2018/03/16/carrossel-mapa-curtidas-interativo.png" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                        </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={12} lg={6}>
                    <Card className={css.destaques_cartao}>
                        <Card.Img st variant="top" src="https://s2.glbimg.com/Jlqi5i7UVaG0-MHHUbi2nqurd5Q=/0x0:720x620/94x94/s.glbimg.com/es/ge/f/original/2018/03/16/carrossel-mapa-curtidas-interativo.png" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                        </Card.Body>
                        </Card>
                    </Col> 
                    <Col sm={12} lg={6}>
                    <Card className={css.destaques_cartao}>
                        <Card.Img st variant="top" src="https://s2.glbimg.com/Jlqi5i7UVaG0-MHHUbi2nqurd5Q=/0x0:720x620/94x94/s.glbimg.com/es/ge/f/original/2018/03/16/carrossel-mapa-curtidas-interativo.png" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
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