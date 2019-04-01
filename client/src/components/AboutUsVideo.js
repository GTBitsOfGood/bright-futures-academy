import React, { Component } from 'react';
import './css/AboutUsVideo.css';

class AboutUsVideo extends Component {

    constructor(props) {
        super(props);

        this.getCarouselVideos = this.getCarouselVideos.bind(this);

        this.state = {
            mainVideoURL: 'https://www.youtube.com/embed/cmJlF666ttc',
            // TODO: make a function to get the video urls from the back end here
            carouselVideoURLs: [
                'https://www.youtube.com/embed/cmJlF666ttc',
                'https://www.youtube.com/embed/cmJlF666ttc',
                'https://www.youtube.com/embed/cmJlF666ttc',
                'https://www.youtube.com/embed/cmJlF666ttc',
                'https://www.youtube.com/embed/cmJlF666ttc',
                'https://www.youtube.com/embed/cmJlF666ttc',
                'https://www.youtube.com/embed/cmJlF666ttc'
            ]
        };
    }

    getCarouselVideos() {
        const { mainVideoURL,  carouselVideoURLs} = this.state;
        
        // TODO: We need to add logic to change the video url when a person clicks on it.

        return (
            carouselVideoURLs.map(function(videoURL) {
                return (
                    <iframe className="card" width="100" height="200" src={videoURL} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>            
                )
            })
        );
    }

    render() {
        const { mainVideoURL } = this.state;

        return (
            <div className="aboutUsVideoBackground">
                <p className="aboutUsVideoHeader">
                    - videos -
                </p>
                {/* TODO fetch video URLs from backend dynamically */}
                <div className="aboutUsMainVideo">
                    <iframe className="aboutUsVideoContent" width="1000" height="400" src={mainVideoURL} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
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
                        {/* TODO get these videos from the back end */}
                        {this.getCarouselVideos()}
                        {/* <iframe className="card" width="100" height="200" src="https://www.youtube.com/embed/cmJlF666ttc" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                        <iframe className="card" width="100" height="200" src="https://www.youtube.com/embed/cmJlF666ttc" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                        <iframe className="card" width="100" height="200" src="https://www.youtube.com/embed/cmJlF666ttc" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                        <iframe className="card" width="100" height="200" src="https://www.youtube.com/embed/cmJlF666ttc" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                        <iframe className="card" width="100" height="200" src="https://www.youtube.com/embed/cmJlF666ttc" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                        <iframe className="card" width="100" height="200" src="https://www.youtube.com/embed/cmJlF666ttc" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                        <iframe className="card" width="100" height="200" src="https://www.youtube.com/embed/cmJlF666ttc" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                        <iframe className="card" width="100" height="200" src="https://www.youtube.com/embed/cmJlF666ttc" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>                     */}
                    </div>
                </div>
            </div>
        );
    }

}

export default AboutUsVideo;
