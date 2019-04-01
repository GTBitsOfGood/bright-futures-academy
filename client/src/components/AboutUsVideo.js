import React, { Component } from 'react';
import './css/AboutUsVideo.css';

class AboutUsVideo extends Component {

    constructor(props) {
        super(props);

        this.state = {
        };
    }

    render() {
        const { index, direction } = this.state;

        return (
            <div className="aboutUsVideoBackground">
                <p className="aboutUsVideoHeader">
                    - videos -
                </p>
                {/* TODO fetch video URLs from backend dynamically */}
                <div className="aboutUsMainVideo">
                    <iframe className="aboutUsVideoContent" width="1000" height="400" src="https://www.youtube.com/embed/cmJlF666ttc" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                    <div className="textContent">
                        <p className="aboutUsVideoHeaderText">
                            Bright Futures Academy
                        </p>
                        <p className="aboutUsVideoDescriptionText">
                            Here's a promotional trailer for additional information and insight into Bright Futures Atlanta and what they're doing for the students, community and families involved! Enjoy!
                        </p>
                    </div>
                </div>
                <div className="aboutUsMainVideo">
                    <div className="scrolling-wrapper-flexbox scrolling-wrapper">
                        <iframe className="card" width="100" height="200" src="https://www.youtube.com/embed/cmJlF666ttc" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                        <iframe className="card" width="100" height="200" src="https://www.youtube.com/embed/cmJlF666ttc" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                        <iframe className="card" width="100" height="200" src="https://www.youtube.com/embed/cmJlF666ttc" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                        <iframe className="card" width="100" height="200" src="https://www.youtube.com/embed/cmJlF666ttc" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                        <iframe className="card" width="100" height="200" src="https://www.youtube.com/embed/cmJlF666ttc" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                        <iframe className="card" width="100" height="200" src="https://www.youtube.com/embed/cmJlF666ttc" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                        <iframe className="card" width="100" height="200" src="https://www.youtube.com/embed/cmJlF666ttc" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                        <iframe className="card" width="100" height="200" src="https://www.youtube.com/embed/cmJlF666ttc" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>                    
                    </div>
                </div>
            </div>
        );
    }

}

export default AboutUsVideo;
