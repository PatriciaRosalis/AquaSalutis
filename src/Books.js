import React, { Component } from 'react'
import Navbar from './Navbar';
import './styles/Card.scss';
import Form from './Form';
import './styles/Navbar.scss';

export default class Books extends Component {
  render() {
    return (
      <div>
          <Navbar />
        <br />
        <br />
        <br />
        <Form />
        <div className="att-card">
          <div className="both">
            <img id="name" src="/card.png " alt="" />
            <div className="vantagens">
              <p>
                <b>Quais as vantagens?</b> <br /><br />
                - Desconto especial nas tarifas de alojamento no Hotel Aqua Salutis. <br />
                - Utilize o seu cartão durante todo o ano. Utilize os pontos sem restrições de datas. <br />
                - Exclusividade: acesso a campanhas e promoções para Membros e atribuição de pontos bónus. <br />
                - Envio de informação e saldo de pontos via SMS, newsletter e/ou e-mail. <br />
                - A adesão ao Aqua Salutis Card é totalmente gratuito. <br />
              </p>
            </div>
          </div>
        </div>
        {/* <hr /> */}
        <div className="vantagens">
          <p id="aderir">
            <b>Como aderir?</b> <br />
            <p></p>
            - Pode aderir de forma fácil e rápida neste site, preenchendo o formulário de adesão.<br />
            - Pode também aderir solicitando o formulário de adesão na receção do hótel e receberá um cartão provisório que deve ser ativado.<br />
            - Em ambos os casos, o seu cartão personalizado será enviado por correio, após a terceira utilização.<br />
          </p>
        </div>
        <img id="aqua" width="100%" src="/agua.png" alt=""/>
      </div>
    )
  }
}
