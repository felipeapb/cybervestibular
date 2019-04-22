import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import css from "../../../../styles.scss"

class Anuncios  extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
<article className={css.itemProva}><a href={this.props.url}>{this.props.nome}</a></article>
    

        )
    }
}



 
export default Anuncios;