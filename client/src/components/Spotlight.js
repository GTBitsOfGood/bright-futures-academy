import React, { Component } from 'react';
import { logoImage } from './../images'
import './css/Spotlight.css';

/**
 * Spotlight/Impact component.
 */
class Spotlight extends Component {

    constructor(props) {
        super(props);
        this.state = {
          currentTab: 0,
          spotlightStyle: "hidden",
          impactStyle: "hidden",
          spotlightContainer: "hidden",
          impactContainer: "hidden"
        }
        this.onClickItem = this.onClickItem.bind(this);
        this.setTab = this.setTab.bind(this);
        this.setStyles = this.setStyles.bind(this);
    }

    onClickItem(position) {
        // TODO: Show detailed information about chosen icon
        alert("See more information about feature " + position);
    }

    setTab(tab) {
      this.setState({currentTab: tab});
    }

    setStyles() {
      var {currentTab, spotlightStyle, impactStyle, spotlightContainer, impactContainer} = this.state;
      if (currentTab === 0) {
        spotlightStyle = "spotlight-underline";
        impactStyle = "hidden";
        spotlightContainer = "spotlight-features-container";
        impactContainer = "hidden";
      } else if (currentTab === 1) {
        spotlightStyle = "hidden";
        impactStyle = "impact-underline";
        spotlightContainer = "hidden";
        impactContainer = "impact-features-container";
      }
      return [spotlightStyle, impactStyle, spotlightContainer, impactContainer];
    }

    render() {
        var styles = this.setStyles();
        var spotlightStyle = styles[0];
        var impactStyle = styles[1];
        var spotlightContainer = styles[2];
        var impactContainer = styles[3];

        return (
          <div className="card-container">
            <div className="titles-container">
              <div className="text-underline-container">
                <p className="title-text" onClick={() => this.setTab(0)} > Spotlight </p>
                <div className={spotlightStyle}/>
              </div>
              <div className="text-underline-container">
                <p className="title-text" onClick={() => this.setTab(1)} > Impact </p>
                <div className={impactStyle}/>
              </div>
            </div>

            <div className={spotlightContainer}>
              <div className="feature" onClick={() => this.onClickItem(0)} >
                <img alt="#" src={logoImage} className="feature-image"/>
                <p className="feature-text">The Arts</p>
              </div>
              <div className="feature" onClick={() => this.onClickItem(1)} >
                <img alt="#" src={logoImage} className="feature-image"/>
                <p className="feature-text">Diversity</p>
              </div>
              <div className="feature" onClick={() => this.onClickItem(2)} >
                <img alt="#" src={logoImage} className="feature-image"/>
                <p className="feature-text">Free Expression</p>
              </div>
            </div>

            <div className={impactContainer}>
              <div className="feature" onClick={() => this.onClickItem(0)} >
                <img alt="#" src={logoImage} className="feature-image"/>
                <p className="feature-text">PreK-12</p>
              </div>
              <div className="feature" onClick={() => this.onClickItem(1)} >
                <img alt="#" src={logoImage} className="feature-image"/>
                <p className="feature-text">Urban</p>
              </div>
              <div className="feature" onClick={() => this.onClickItem(2)} >
                <img alt="#" src={logoImage} className="feature-image"/>
                <p className="feature-text">Innovation</p>
              </div>
            </div>
          </div>
        );
    }
}

export default Spotlight;
