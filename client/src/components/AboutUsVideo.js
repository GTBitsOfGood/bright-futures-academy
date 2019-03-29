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
                <iframe width="560" height="315" src="https://www.youtube.com/watch?v=cmJlF666ttc" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            </div>
        );
    }

}

export default AboutUsVideo;
