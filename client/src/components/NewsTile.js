import React, { Component } from 'react';
import './css/NewsTile.css';
import { logoImage } from '../images';

/**
 * News tile component that will be used for populating the news landing page component.
 */
class NewsTile extends Component {

    constructor(props) {
        super(props);

        this.state = {
        }
    }

    render() {
        const { header, caption } = this.props;
        return (
            <figure>
                <div className="newsImage">
                    <img className="newsImage" alt="#" src={logoImage}  width="90%" height="90%"/>
                </div>
                <figcaption className="newsTileHeader">{header}</figcaption>
                <figcaption className="newsTileParagraph">{caption}</figcaption>
            </figure>
        );
    }
}

export default NewsTile;
