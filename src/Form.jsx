import React, { Component } from 'react'

export default class Form extends Component {
  render() {
    return (
      <div>
        <form className="Form-check">
          <img src="/aquasalutis.png" alt="" width="180px" height="196px" />
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputEmail4">Check-in</label>
              <input type="date" class="form-control" id="inputEmail4" placeholder="Check-in" />
            </div>
            <div class="form-group col-md-6">
              <label for="inputEmail4" id="check-out">Check-out</label>
              <input type="date" class="form-control" id="inputEmail4" placeholder="Check-out" />
            </div>
          </div>
          <div class="form-row Form-check ">
            <div class="form-group col-md-4 form-form">
              <label for="inputEmail4">Adultos</label>
              <select id="inputState" class="form-control">
                <option selected>1</option>
                <option>2</option>
              </select>
            </div>
            <div class="form-group col-md-4 form-form" >
              <label for="inputEmail4">Crianças</label>
              <select id="inputState2" class="form-control">
                <option selected>1 </option>
                <option>2   </option>
              </select>
            </div>
            <a href="/Reservas"> Reservar </a>
          </div>
        </form>
      </div>
    )
  }
}

