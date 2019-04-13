import React, { Component } from 'react'
import { Container, Row, Col, Card  } from 'react-bootstrap'
import css from "../../../styles.scss"
class Material  extends Component {
    state = {  }
    render() { 
        return ( 
            <Container>
                <h2 className={css.h2_destaque}>PARA ESTUDAR</h2>
                <Row>
                    
                    <Col sm={12} lg={8}>
                    <Row>
                        <Col sm={6} lg={3}>
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
                        <Col sm={6} lg={3}>
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
                        <Col sm={6} lg={3}>
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
                        <Col sm={6} lg={3}>
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
                    </Row>

                    <Row>

                    <Col sm={12} lg={6}>
                    <h2 className={css.h2_destaque}>PROVAS</h2>                   

                    </Col>
                    <Col sm={12} lg={6}>
                    <h2 className={css.h2_destaque}>PROFESSORES</h2>     
                    <Row>              
                    <Col sm={6} lg={6}>
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
                        <Col sm={6} lg={6}>
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
                        </Row>  
                    </Col>           
                    </Row>
                    </Col>
                    <Col sm={12} lg={4}>
GDFG
                    </Col>

        
                </Row>
                        
            </Container>
);
    }
}
 
export default Material;