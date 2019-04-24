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
    <div style={this.props.cor} className={css.menucaixa}  >
    <i className={this.props.icone}></i>

    {this.props.nome}
    </div>
    

        )
    }
}
 
export default Menucaixa ;