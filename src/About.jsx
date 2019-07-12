import React, { Component } from 'react';
import Navbar from './Navbar';

export default class About extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="about-pic">
          <img src="/aquasalutis2.png" width="300px" height="300px" alt="" />
          <div className="texto-about">
            <p>O hotel irá proporcionar o usufruto dos benefícios de relaxamento, aliando a saúde o bem-estar e o lazer.
          Assim sendo, irá dar a conhecer aos nossos clientes, as paisagens, produtos, cultura, tradições locais e nacionais.
          Com esta iniciativa, pretende-se criar um empreendimento turístico que dê notoriedade à zona do Montijo, bem como desenvolver a economia local.
          Ao longo da prova irá ser apresentado a localização do empreendimento hoteleiro e as acessibilidades ao local.
          Irá ser explicado de igual forma, o enquadramento histórico e geográfico, o clima e a economia, assim como também destacamos os mais importantes atrativos culturais materiais e imateriais e os atrativos naturais.
          Para que os clientes possam desfrutar de momentos de entretenimento, teremos o cuidado de mencionar e evidenciar os melhores restaurantes, museus, empresas turísticas.
          </p>
          </div>
        </div>
      </div>
    )
  }
}
