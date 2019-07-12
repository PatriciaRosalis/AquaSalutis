import React, { Component } from 'react'
import "./styles/Navbar.scss";

export default class Navbar extends Component {
  render() {
    return (
      <div className="Navbar-1">
        <nav className="navbar navbar-expand-lg navbar-light ">
        {/* <img src="/aquasalutis.png" alt="" width="45px" height="45px" /> */}
          <a className="navbar-brand" id="brand" href="/"> Aqua Salutis Hotel&Spa </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="/Sobre-nós">Sobre Nós <span className="sr-only">(current)</span></a>
              </li>
              {/* <li className="nav-item">
                <a className="nav-link" href="/Packages">Packages</a>
              </li> */}
              <li className="nav-item">
                <a className="nav-link" href="/Aqua-Card"><b>Aqua Salutis CARD</b></a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}
