import React, { Component } from 'react';
import Navbar from './Navbar';
import Form from './Form';

export default class SemDisponibilidade extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <br/>
        <br/>
        <Form />
        <div className="not">
          <h4>Obrigada por escolher o Aqua Salutis Hotel & SPA.  <br/>
            Infelizmente não temos disponibilidade para as datas mencionadas.  <br/>
            Por favor contacte-nos diretamente  - 21 9999 999. 
        </h4>
        </div>
      </div>
    )
  }
}
