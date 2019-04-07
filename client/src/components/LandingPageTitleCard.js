import React, { Component } from 'react';
import './css/LandingPageTitleCard.css';
import Carousel from 'react-bootstrap/Carousel';
import {infographic} from '../images/';

/**
 * Component for the Carousel on the landing page.
 */
class LandingPageTitleCard extends Component {
    constructor(props) {
        super(props);
        
        this.handleSelect = this.handleSelect.bind(this);
        this.getSlides = this.getSlides.bind(this);

        this.state = {
          index: 0,
          direction: null,
          numSlides: 0
        };
    }

    getSlides() {
        // TODO: get slide image links from backend

    }

    handleSelect(selectedIndex, e) {
        this.setState({
          index: selectedIndex,
          direction: e.direction,
        });
    }

    render() {
        const { index, direction } = this.state;

        return (
                <Carousel
                    activeIndex={index}
                    direction={direction}
                    onSelect={this.handleSelect}
                    controls={true}
                >
                    <Carousel.Item>
                        <div
                                className="backgroundImage"
                                src={infographic}
                                alt={"#"}
                            />
                        <div className="imageOverlay">
                        </div>
                        <Carousel.Caption>
                            <h3>Bright Futures Academy</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div
                                className="backgroundImage"
                                src={infographic}
                                alt={"#"}
                            />
                        <div className="imageOverlay">
                        </div>
                        <Carousel.Caption>
                            <h3>Bright Futures Academy</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div
                                className="backgroundImage"
                                src={infographic}
                                alt={"#"}
                            />
                        <div className="imageOverlay">
                        </div>
                        <Carousel.Caption>
                            <h3>Bright Futures Academy</h3>
                            <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
        );
    }
}

export default LandingPageTitleCard;
