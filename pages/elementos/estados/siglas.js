import React, {Component } from 'react';
import css from "../../../styles.scss"



import { Container,Row, Col,Tooltip, OverlayTrigger } from 'react-bootstrap';

class Siglas  extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
    <div className={css.caixaestado} >
    {this.props.siglas}
    </div>
    

        )
    }
}
 
export default Siglas ;