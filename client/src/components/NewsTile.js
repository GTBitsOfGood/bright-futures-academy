import React, { Component } from 'react';
import './css/LandingPageNews.css';
import logoImage from '../images';

class NewsTile extends Component {

    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return (
            <div>
                <div className="newsImage">
                    <img alt="#" src={logoImage[0]}  width="15%" height="10%"/>
                </div>
                <div className="newsTileText">
                    <p>
                        Stet sit amet eirmod ipsum rebum elitr clita. Et sea invidunt invidunt sea sanctus erat et. Consetetur duo amet et lorem sadipscing tempor gubergren, erat est consetetur sit vero sit labore. Ea sed sea dolor.
                    </p>
                </div>
            </div>
        );
    }
}

export default NewsTile;
