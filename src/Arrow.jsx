import React, { Component } from 'react';
import './styles/Arrow.scss';

export default class Arrow extends Component {
  render() {
    return (
      <div>
        <div class="downArrow bounce">
          <img width="50" height="50" alt="" src="https://www.sigtarp.gov/SiteAssets/template/img/angle-arrow-down-primary.svg" />
        </div>
      </div>
    )
  }
}
