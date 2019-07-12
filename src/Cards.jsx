import React, { Component } from 'react'

export default class Cards extends Component {
  render() {
    return (
      <div className="card-home">
        <div className="card-deck">
          <div className="card">
            <img src="/massage.jpg" height="300px" className="card-img-top card-pat" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Package Aurora</h5>
              <p className="card-text"> Quarto Duplo <br /> 2 Pessoas <br /> 3 Noites <br /> Meia-pensão <br /> Acesso Grátis Aqua & rejuvenescimento</p>
              <p className="card-text"> <b> 675€ </b> <small className="text-muted"> Por package</small></p>
            </div>
          </div>
          <div className="card">
            <img src="/salutis.png" height="300px" className="card-img-top card-pat" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Package Romântico - Salutis</h5>
              <p className="card-text"> Quarto Duplo <br/> 2 Pessoas <br/> 2 Noites <br/> Meia-Pensão <br/> Acesso Grátis SPA <br/> Oferta de uma massagem “Aqua relax” <br/>  Jantar no quarto c/ oferta de champanhe</p>
              <p className="card-text"> <b>430€ </b><small className="text-muted"> Por package</small></p>
            </div>
          </div>
          <div className="card">
            <img src="/aqua.png" height="300px" className="card-img-top card-pat" alt="..." />
            <div className="card-body">
              <h5 className="card-title"> Package Aqua </h5>
              <p className="card-text">Cliente Fidelizado com o cartão Aqua Salutis <br/> 1 Pessoa <br/> 7 Noites <br /> Tratamento específico à escolha durante 7 dias < br/> Meia-Pensão <br/> Jantar no Restaurante Maré Cheia  </p>
              <p className="card-text"><b>342,50€ </b><small className="text-muted"> Por package</small></p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
