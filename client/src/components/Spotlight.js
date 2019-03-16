import React, { Component } from 'react';
import logoImage from './../images'
import './css/Spotlight.css';

/**
 * Spotlight/Impact component.
 */
class Spotlight extends Component {

    constructor(props) {
        super(props);
        this.state = {
          currentTab: 0
        }
        this.onClickItem = this.onClickItem.bind(this);
    }

    onClickItem(position) {
        // TODO: Show detailed information about chosen icon
        alert("See more information about feature " + position);
    }

    render() {
        // const { teachers } = this.state;
        // how to programmatically change display of text bw none/flex
        return (
          <div className="card-container">
            <div className="titles-container">
              <div className="text-underline-container">
                <p className="title-text"> Spotlight </p>
                <div className="spotlight-underline"/>
              </div>
              <div className="text-underline-container">
                <p className="title-text"> Impact </p>
                <div className="impact-underline"/>
              </div>
            </div>
            <div className="spotlight-features-container">
              <div className="feature" onClick={this.onClickItem}>
              {/* TODO: figure out how to pass params (0, 1, 2, representing item position) */}
                <img alt="#" src={logoImage[0]} className="feature-image"/>
                <p className="feature-text">The Arts</p>
              </div>
              <div className="feature">
                <img alt="#" src={logoImage[0]} className="feature-image"/>
                <p className="feature-text">Diversity</p>
              </div>
              <div className="feature">
                <img alt="#" src={logoImage[0]} className="feature-image"/>
                <p className="feature-text">Free Expression</p>
              </div>
            </div>

            <div className="impact-features-container">
              <div className="feature">
                <img alt="#" src={logoImage[0]} className="feature-image"/>
                <p className="feature-text">PreK-12</p>
              </div>
              <div className="feature">
                <img alt="#" src={logoImage[0]} className="feature-image"/>
                <p className="feature-text">Urban</p>
              </div>
              <div className="feature">
                <img alt="#" src={logoImage[0]} className="feature-image"/>
                <p className="feature-text">Innovation</p>
              </div>
            </div>
          </div>
        );
    }
}

export default Spotlight;