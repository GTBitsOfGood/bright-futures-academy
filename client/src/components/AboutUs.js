import React, { Component } from 'react';
import logoImage from './../images'
import './css/AboutUs.css';

/**
 * About Us component. https://github.com/GTBitsOfGood/bright-futures-academy/issues/108
 */
class AboutUs extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
        
        this.onClickMoreAboutUs = this.onClickMoreAboutUs.bind(this);
    }

    onClickMoreAboutUs() {
        // TODO: Add logic for page switching
        alert("clicked more about us");
    }

    render() {
        return (
            <div className="rectangleBackground">
                <div>
                    <img alt="Brand" src={logoImage[0]} className="rectangleImage"/>
                </div>
                <div>
                    <p className="headingText">
                        Explore Bright Futures Academy
                    </p>
                    <p className="contentText">
                        Lorem no diam dolore stet clita gubergren eirmod est diam est. Duo at sed eirmod dolor at. Et erat takimata.
                    </p>
                    <div id="moreAboutUs" className="moreAboutUs" onClick={this.onClickMoreAboutUs}>
                        More About Us >
                    </div>
                </div>
            </div>
        );
    }
}

export default AboutUs;