import React, { Component } from 'react';
import './css/LandingPageHeader.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { logoImage } from './../images';

/**
 * Landing Page Header before a parent signs in. https://github.com/GTBitsOfGood/bright-futures-academy/issues/104
 */
class LandingPageHeader extends Component {

    constructor(props) {
        super(props);

        this.state ={

        }
    }

    /**
     * TODO: Add links for social media links
     */
    render() {
        // return (
        //         <div className="icons">
        //             <div className="logo">
        //                 <img alt="#" src={logoImage} height="100px" />
        //             </div>
        //             <div className="phoneNumber">
        //                 <span className="phoneSpace">
        //                     <FontAwesomeIcon icon={ faPhone }/>
        //                     <p className="phoneDigits">
        //                         404-799-1249
        //                     </p>
        //                 </span>
        //             </div>
        //             <div className="businessIcons">
        //                 <a href="https://twitter.com/bfatlorg"><FontAwesomeIcon icon={['fab', 'twitter']}/></a>
        //                 <a href="https://www.facebook.com/BrightFuturesAtl/"><FontAwesomeIcon icon={['fab', 'facebook-f']}/></a>
        //                 <a href="https://www.instagram.com/Bfatlorg/"><FontAwesomeIcon icon={['fab', 'instagram']}/></a>
        //                 <a href="https://www.youtube.com/channel/UCnOZoDqIuwuJFFKkpZ7kn8w"><FontAwesomeIcon icon={['fab', 'youtube']}/></a>
        //             </div>
        //         </div>
        // );

        return (
            <div className="icons">
                <div className="logo">
                    <img alt="#" src={logoImage} height="100px" />
                </div>
                <div className="phoneNumber">
                    
                    <FontAwesomeIcon icon={ faPhone }/>
                    <p className="phoneDigits">
                        404-799-1249
                    </p>
                    <div className="businessIcons">
                    <a href="https://twitter.com/bfatlorg"><FontAwesomeIcon icon={['fab', 'twitter']}/></a>
                    <a href="https://www.facebook.com/BrightFuturesAtl/"><FontAwesomeIcon icon={['fab', 'facebook-f']}/></a>
                    <a href="https://www.instagram.com/Bfatlorg/"><FontAwesomeIcon icon={['fab', 'instagram']}/></a>
                    <a href="https://www.youtube.com/channel/UCnOZoDqIuwuJFFKkpZ7kn8w"><FontAwesomeIcon icon={['fab', 'youtube']}/></a>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default LandingPageHeader;
