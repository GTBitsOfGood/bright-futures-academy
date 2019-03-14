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
                            At dolore ipsum amet est est aliquyam. Magna sed justo clita magna sanctus sanctus duo. Sed duo vero accusam et.. Stet sit lorem stet kasd ut sit. Dolor nonumy vero nonumy rebum sit vero rebum. Ut ipsum no sea eirmod ut vero eirmod, consetetur kasd dolore ipsum est diam consetetur ea no ipsum. Amet eos ipsum aliquyam et sanctus ut et et, clita sea elitr sit rebum, diam et accusam.
                        </p>
                    </div>
                    <div className="right">
                        <table cellpadding="7">
                            <tr className="headingText uppercase small">
                                <th>Useful Links</th>
                                <th>Support</th>
                                <th>Contact</th>
                            </tr>
                            <tr className="contentText">
                                <th>About Us</th>
                                <th>Blog</th>
                                <th><a className="noStyle" href="mailto:bfinfo@bfatl.org">bfinfo@bfatl.org</a></th> {/* TODO: replace this with the right email */}
                            </tr>
                            <tr className="contentText">
                                <th>Academics</th>
                                <th>Help</th>
                                <th>404-799-1249</th>
                            </tr>
                            <tr className="contentText">
                                <th>Contact Us</th>
                                <th>FAQ</th>
                            </tr>
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
