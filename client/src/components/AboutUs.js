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
            <div className="rectangleBackgroundAbout">
                    <div className="left">
                        <img alt="#" src={logoImage[0]} className="rectangleImageAbout"/>
                    </div>
                    <div className="textContentAbout right">
                        <p className="headingTextAbout">
                            Explore Bright Futures Academy
                        </p>
                        <p className="contentTextAbout">
                            No ipsum tempor dolore gubergren duo, sanctus diam dolore sadipscing dolores sadipscing, erat ipsum eirmod aliquyam lorem vero sit tempor. Eos stet lorem takimata eos rebum kasd diam duo dolor. Amet sed consetetur aliquyam et..
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