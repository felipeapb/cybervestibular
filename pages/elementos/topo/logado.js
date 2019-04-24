import React, {Component } from 'react';
import css from "../../../styles.scss"



import { Container,Row, Col,Tooltip, OverlayTrigger } from 'react-bootstrap';

class Logado  extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
<section className={css.topologado} >
    <Container>
    Logado
    </Container>    
    
    </section>
    

        )
    }
}
 
export default Logado ;