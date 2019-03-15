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
            <div className="background uppercase">
                <span className="pageLinks">
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
                    <div className="right">
                        <button className="button">Parent Sign in</button>
                    </div>
                </span>
            </div>
        );
    }
}

export default LandingPageNavbar;
