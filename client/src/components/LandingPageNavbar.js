import React, { Component } from 'react';
import './css/LandingPageNavbar.css';

/**
 * Landing Page Navbar before parent sign in. 
 */
class LandingPageNavbar extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    /**
     * TODO: Add Links to the right pages.
     */
    render() {
        return (
            <div className="backgroundNavbar uppercaseNavbar">
                <span className="pageLinksNavbar">
                    <p>
                        Home
                    </p>
                    <p>
                        About Us
                    </p>
                    <p>
                        Academics
                    </p>
                    <p>
                        Admissions
                    </p>
                    <p>
                        Events
                    </p>
                    <p>
                        Contact
                    </p>
                    <div className="rightNavbar">
                        <button className="buttonNavbar">Parent Sign in</button>
                    </div>
                </span>
            </div>
        );
    }
}

export default LandingPageNavbar;
