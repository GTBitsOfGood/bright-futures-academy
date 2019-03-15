import React, { Component } from 'react';
import './css/LandingPageHeader.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import logoImage from '../images';

/**
 * Landing Page Header before a parent signs in. https://github.com/GTBitsOfGood/bright-futures-academy/issues/104
 */
class LandingPageHeader extends Component {

    constructor(props) {
        super(props);

        this.state ={

        }
    }

    render() {
        return (
                <div className="icons">
                    <div className="logo">
                        <img alt="#" src={logoImage[0]} height="75px" />
                    </div>
                    <div className="phoneNumber">
                        <span className="phoneSpace">
                            <FontAwesomeIcon icon={ faPhone }/>
                            <p>
                                404-799-1249
                            </p>
                        </span>
                    </div>
                    <div className="businessIcons">
                        <FontAwesomeIcon icon={['fab', 'twitter']}/>
                        <FontAwesomeIcon icon={['fab', 'facebook-f']}/>
                        <FontAwesomeIcon icon={['fab', 'instagram']}/>
                        <FontAwesomeIcon icon={['fab', 'youtube']}/>
                    </div>
                </div>
        );
    }
}

export default LandingPageHeader;