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


class index  extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
        <fragment >
                <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        crossorigin="anonymous"
      />
              <Topo/>
              <Slide />
              <Estados/>
              <Destaques/>
              <Noticias/>
              <Anuncios/>
              <Material/>
              <Rodape/>
        </fragment>);
    }
}
 export default index;
