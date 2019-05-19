import React, { Component } from 'react';
import { Container,Row, Col, Card } from 'react-bootstrap';
import css from "../../../styles.scss"
import Faker from 'faker';
Faker.locale = "pt_Br";

class Autobusca  extends Component {

    state = { 
        curso: undefined
     }
    render() { 
        return ( 
            <section className={css.busca_cursos}>
                <h2 className={css.h2_destaque_cursos}>BUSCA CURSOS</h2>
                <span>Encontre os principais cursos do país</span>
                <input placeholder="Escolha seu curso" className={css.inputbuscacursos} value={this.state.curso} onChange={(e)=> this.setState({curso: e.target.value})} type="text" />
                <div>Pesquisando por{this.state.curso}</div>
        </section>
        )
}
}
 
export default Autobusca;