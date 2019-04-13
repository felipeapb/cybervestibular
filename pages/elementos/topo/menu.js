import React, { Component } from 'react';

import { Container,Row, Col } from 'react-bootstrap';
import Menucaixa from './menuCaixa';
import css from "../../../styles.scss"

class Menu  extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
<nav className={css.menusuperior} >
    <Menucaixa  nome="Noticias"/>
    <Menucaixa nome="Noticias"/>
</nav>

        )
    }
}
 
export default Menu ;