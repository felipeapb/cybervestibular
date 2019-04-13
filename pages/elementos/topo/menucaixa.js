import React, {Component } from 'react';
import css from "../../../styles.scss"



import { Container,Row, Col,Tooltip, OverlayTrigger } from 'react-bootstrap';

class Menucaixa  extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
    <div className={css.menucaixa} >
    {this.props.nome}
    </div>
    

        )
    }
}
 
export default Menucaixa ;