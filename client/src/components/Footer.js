import React, { Component, Fragment } from 'react';
import './css/Footer.css';

/**
 * Footer for Landing Page before parents sign in. https://github.com/GTBitsOfGood/bright-futures-academy/issues/112
 */
class Footer extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
        }
    }

    /**
     * TODO: Need to replace the pages with actual links.
     */
    render() {
        return (
            <div className="rectangleBackground">
                <div className="mainContent">
                    <div className="left">
                        <p className="headingText" id="BFA">
                            <div>
                            Bright Futures Academy
                            </div>
                        </p>
                        <p className="contentText" id="BFAtext">
                            Bright Futures Academy focuses on helping youth of limited resources on Atlanta’s Westside by providing the spiritual, educational and familial support that helps them become productive members of society and role models to their peers.
                        </p>
                    </div>
                    <div className="right">
                        <table cellPadding="7">
                            <tbody>
                                <tr className="headingText uppercase small">
                                    <th>Useful Links</th>
                                    <th>Support</th>
                                    <th>Contact</th>
                                </tr>
                            </tbody>
                            <tbody>
                                <tr className="contentText">
                                    <th>About Us</th>
                                    <th>Blog</th>
                                    <th><a className="noStyle" href="mailto:bfinfo@bfatl.org">bfinfo@bfatl.org</a></th> {/* TODO: replace this with the right email */}
                                </tr>
                            </tbody>
                            <tbody>
                                <tr className="contentText">
                                    <th>Academics</th>
                                    <th>Help</th>
                                    <th>404-799-1249</th>
                                </tr>
                            </tbody>
                            <tbody>
                                <tr className="contentText">
                                    <th>Contact Us</th>
                                    <th>FAQ</th>
                                </tr>
                            </tbody>
                        </table>           
                    </div>   
                </div>
                <p className="allRightsReserved">
                    ©2019 - Bright Futures Academy. All right reserved.
                </p>
            </div>
        );
    }
}

export default Footer;
