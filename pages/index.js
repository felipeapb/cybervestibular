import React, { Component } from 'react';
import { Button, ButtonToolbar } from 'react-bootstrap';
import Slide from "./elementos/slide/slide"
import Topo from "./elementos/topo/topo"
import Estados from "./elementos/estados/estados"
import Destaques from "./elementos/destaques/destaques"
import Anuncios from "./elementos/anuncios/anuncios"
import Material from "./elementos/material/material"
import Rodape from "./elementos/rodape/rodape"
import Noticias from "./elementos/noticias/noticias"
import fragment from "react-dom"
import Head from "./elementos/head/head"


class index  extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
        <fragment >
            <Head 
                siteNome="CyberVestibular - O seu portal sobre vestibular"
                descricao="Um novo portal de vestibular"
            />
              <Topo/>
              <Slide />
              <Estados/>
              <Destaques/>
              <Noticias/>
              <Anuncios/>
              <Material/>
              <Rodape/>
        </fragment>)
    }
}
 export default index;
