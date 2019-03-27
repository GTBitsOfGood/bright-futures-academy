import React, { Component } from 'react';
import './css/LandingPageNavbar.css';
import { Link } from 'react-router-dom';

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
                        <form action="">
                            <Link to='/login'>
                                <input type="button" className="buttonNavbar" value="Parent Sign In"/>
                            </Link>
                        </form>
                    </div>
                </span>
            </div>
        );
    }
}

export default LandingPageNavbar;
