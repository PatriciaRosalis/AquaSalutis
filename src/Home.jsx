import React, { Component } from 'react';
import "./styles/Home.scss";
import Form from './Form';
import Navbar from './Navbar';
import Cards from './Cards';
import Arrow from './Arrow';

export default class Home extends Component {
  render() {
    return (
      <React.Fragment >
        <div className="principal">
          <Navbar />
          <div className="welcome">
            <Form />
            {/* <h2>Aqua Salutis Hotel&SPA</h2> */}
          </div>
        </div>
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="/1994_roq2b_00_p_1024x768.jpg" className="d-block w-100" width="100%" height="759px" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="/44125211.jpg" alt="..." className="d-block w-100" width="100%" height="759px" />
            </div>
            <div className="carousel-item">
              <img src="/9c3a0458-d52d-4337-98f2-3ec6bdde8b8b.f10.jpg" alt="..." className="d-block w-100" width="100%" height="759px" />
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
          <Arrow /> 
        </div>
        <Cards />
        <div>
        </div>
      </React.Fragment>
    )
  }
}
