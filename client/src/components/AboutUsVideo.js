import React, { Component } from 'react';
import './css/AboutUsVideo.css';

class AboutUsVideo extends Component {

    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return (
            <div className="aboutUsVideoBackground">
                <p className="aboutUsVideoHeader">
                    - videos -
                </p>
                {/* TODO fetch video URLs from backend dynamically */}
                <div className="aboutUsMainVideo">
                    <iframe width="560" height="315" src="https://www.youtube.com/watch?v=cmJlF666ttc" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                    <div>
                        <p className="aboutUsVideoHeaderText">
                            Bright Futures Academy
                        </p>
                        <p className="aboutUsVideoDescriptionText">
                            Here's a promotional trailer for additional information and insight into Bright Futures Atlanta and what they're doing for the students, community and families involved! Enjoy!
                        </p>
                    </div>
                </div>
            </div>
        );
    }

}

export default AboutUsVideo;
