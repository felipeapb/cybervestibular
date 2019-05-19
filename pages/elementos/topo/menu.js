import React, { Component } from 'react';

import { Container,Row, Col } from 'react-bootstrap';
import Menucaixa from './menuCaixa';
import css from "../../../styles.scss"

const laranja = { background: '#FF7D0B' };
const azul = { background: '#019ADE' };
const roxo = { background: '#B05ABD' };
const verde = { background: '#02CE6F' };
const marinho = { background: '#24465F' };
const vermelho = { background: '#0080BA' };
const amarelo = { background: '#f1c40f' };
class Menu  extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            isLogin: false
         };
    }
    handleClick() {
        this.setState(state => ({
          isLogin: !state.isLogin
        }));
        console.log(this.state.isLogin)
     }
    render() { 
        return (
<nav className={css.menusuperior} >

<Menucaixa  cor={laranja}  nome="ESTUDOS" icone="fas fa-box-open"/>
    <Menucaixa cor={vermelho}   nome="DICAS"  icone="fas fa-box-open"/>
    <Menucaixa cor={azul}   nome="SERVIÇOS" icone="fas fa-box-open"/>
    <Menucaixa cor={roxo}   nome="VESTIBULARES"  icone="fas fa-box-open"/>
    <Menucaixa cor={verde}   nome="ENEM" icone="fas fa-box-open"/>
    <Menucaixa cor={amarelo}   nome="ENEM" icone="fas fa-box-open"/>
    
    <span className={css.logincaixa} onClick= {(e)=> this.handleClick()} >
        <Menucaixa className={css.logincaixa} cor={marinho}  nome="LOGIN"  icone="fas fa-box-open"/>
     </span>   
   

</nav>

        )
    }
}
 
export default Menu ;