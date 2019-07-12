import React, { Component } from 'react';
import Navbar from './Navbar';

export default class SemDisponibilidade extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        
        <h4>Obrigada por escolher o Aqua Salutis Hotel & SPA.
          Infelizmente não temos disponibilidade para as datas mencionadas.
          Por favor contacte-nos diretamente, 21 9999 999.
          Obrigada, Aqua Salutis Hotel & SPA.
        </h4>
      </div>
    )
  }
}
