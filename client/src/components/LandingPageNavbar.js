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
                        <form action="">
                            <Link to='/landingPage'>
                                <input type="button" className="navbarButton" value="Home"/>
                            </Link>
                        </form>
                    </p>
                    <p>
                        <form action="">
                            <Link to='/aboutUs'>
                                <input type="button" className="navbarButton" value="About Us"/>
                            </Link>
                        </form>
                    </p>
                    <p>
                        <form action="">
                            <Link to='/academics'>
                                <input type="button" className="navbarButton" value="Academics"/>
                            </Link>
                        </form>
                    </p>
                    <p>
                        <form action="">
                            <Link to='/admissions'>
                                <input type="button" className="navbarButton" value="Admissions"/>
                            </Link>
                        </form>
                    </p>
                    <p>
                        <form action="">
                            <Link to='/events'>
                                <input type="button" className="navbarButton" value="Events"/>
                            </Link>
                        </form>
                    </p>
                    <p>
                        <form action="">
                            <Link to='/contact'>
                                <input type="button" className="navbarButton" value="Contact"/>
                            </Link>
                        </form>
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
