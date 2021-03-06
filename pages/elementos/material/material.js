import React, { Component } from 'react'
import AdSense from 'react-adsense'
import { Container, Row, Col, Card  } from 'react-bootstrap'
import css from "../../../styles.scss"
import Provas from "./provas/provas"
import Autobusca from "./../autobusca/autobusca"
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
                                <Card.Img  variant="top" src="https://hp.imguol.com.br/c/home/11/2018/03/16/bernardinho-se-emociona-em-homenagem-a-bebeto-de-freitas-antes-de-sesc-x-pinheiros-pela-superliga-1521250626768_200x140.jpg" />
                                <Card.Body >
                            <Card.Title><a href="">Técnica Pomodoro</a></Card.Title>
                                    
                                    <Card.Text>
                                    Aumente sua produtividade nos estudos com a Técnica Pomodoro
                                    </Card.Text>
                                </Card.Body>
                                </Card>
                        </Col>                        
                        <Col sm={6} lg={3}>
                            <Card>
                                <Card.Img  variant="top" src="https://hp.imguol.com.br/c/home/11/2018/03/16/bernardinho-se-emociona-em-homenagem-a-bebeto-de-freitas-antes-de-sesc-x-pinheiros-pela-superliga-1521250626768_200x140.jpg" />
                                <Card.Body >
                            <Card.Title><a href="">Técnica Pomodoro</a></Card.Title>
                                    
                                    <Card.Text>
                                    Aumente sua produtividade nos estudos com a Técnica Pomodoro
                                    </Card.Text>
                                </Card.Body>
                                </Card>
                        </Col>      
                        <Col sm={6} lg={3}>
                            <Card>
                                <Card.Img  variant="top" src="https://hp.imguol.com.br/c/home/11/2018/03/16/bernardinho-se-emociona-em-homenagem-a-bebeto-de-freitas-antes-de-sesc-x-pinheiros-pela-superliga-1521250626768_200x140.jpg" />
                                <Card.Body >
                            <Card.Title><a href="">Técnica Pomodoro</a></Card.Title>
                                    
                                    <Card.Text>
                                    Aumente sua produtividade nos estudos com a Técnica Pomodoro
                                    </Card.Text>
                                </Card.Body>
                                </Card>
                        </Col>        
                        <Col sm={6} lg={3}>
                            <Card>
                                <Card.Img  variant="top" src="https://hp.imguol.com.br/c/home/11/2018/03/16/bernardinho-se-emociona-em-homenagem-a-bebeto-de-freitas-antes-de-sesc-x-pinheiros-pela-superliga-1521250626768_200x140.jpg" />
                                <Card.Body >
                            <Card.Title><a href="">Técnica Pomodoro</a></Card.Title>
                                    
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

                    <Provas nome="UFES" url="#"/> 
                    <Provas nome="UFES" url="#"/>    
                    <Provas nome="UFES" url="#"/>    
                    <Provas nome="UFES" url="#"/>    
                    <Provas nome="UFES" url="#"/>    
                    <Provas nome="UFES" url="#"/>    
                    <Provas nome="UFES" url="#"/>              
                    

                    </Col>
                    <Col sm={12} lg={6}>
                    <h2 className={css.h2_destaque}>PROFESSORES</h2>     
                    <Row>              
                    <Col sm={6} lg={6}>
                            <Card>
                                <Card.Img  variant="top" src="https://hp.imguol.com.br/c/home/07/2018/09/11/o-grande-circo-mistico-de-caca-diegues-foi-selecionado-para-disputar-uma-indicacao-ao-oscar-1536711612309_200x140.jpg" />
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
                                <Card.Img  variant="top" src="https://hp.imguol.com.br/c/home/07/2018/09/11/o-grande-circo-mistico-de-caca-diegues-foi-selecionado-para-disputar-uma-indicacao-ao-oscar-1536711612309_200x140.jpg" />
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
                    <Autobusca/>
                        sem ads
                    </Col>

        
                </Row>
                        
            </Container>
);
    }
}
 
export default Material;