import React, { Component } from 'react';
import { Container, Pagination } from 'react-bootstrap';
import css from "../../../styles.scss"
import Siglas from "./siglas"


const estadosdoBrasil = [
    { sigla: 'AC', nome : 'Acre'},
    { sigla: 'AL', nome : 'Alagoas'},
    { sigla: 'AM', nome: 'Amazonas'},
    { sigla: 'AP', nome: 'Amapá'},
    {sigla: 'BA', nome: 'Bahia'},
    {sigla: 'CE', nome: 'Ceará'},
    {sigla: 'DF', nome: 'Distrito Federal'},
    {sigla: 'ES', nome: 'Espiríto Santo'},
    {sigla: 'GO', nome: 'Goiás'},
    {sigla: 'MA', nome: 'Maranhão'},
    {sigla: 'MG', nome: 'Minas Gerais'},
    {sigla: 'MS', nome: 'Mato Grosso do Sul'},
    {sigla: 'MT', nome: 'Mato Grosso'},
    {sigla: 'PB', nome: 'Paraiba'},
    {sigla: 'PE', nome: 'Pernambuco'},
    {sigla: 'PI', nome: 'Piaui'},
    {sigla: 'PR', nome: 'Paraná'},
    {sigla: 'RJ', nome: 'Rio de Janeiro'},
    {sigla: 'RN', nome: 'Rio Grande do Norte'},
    {sigla: 'RI', nome: 'Rondônia'},
    {sigla: 'RR', nome: 'Roraima'},
    {sigla: 'RS', nome: 'Rio Grande do Sul'},
    {sigla: 'SC', nome: 'Santa Catarina'},
    {sigla: 'SE', nome: 'Sergipe'},
    {sigla: 'SP', nome: 'São Paulo'},
    {sigla: 'TO', nome: 'Tocantins'},
];
class Estados  extends Component {
    state = {  }
    
    render() { 
       

        return ( 
            <Container>
                <div className={css.grupoEstados}>
                <span className={css.porEstados}>Por estado</span>

                         {
                             estadosdoBrasil.map(
                                 item=>(
                                     <Siglas key={item.sigla} siglas={item.sigla}></Siglas>            )
                             )
                         }
                         </div>
            </Container>
        )

    }
}
 
export default Estados;