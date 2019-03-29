import React, { Component } from 'react';
import { Footer, About, AboutUsVideo, LandingPageHeader, LandingPageNavbar } from './../components';

/**
 * About Us page for general user view on landing page.
 */
class AboutUs extends Component {

    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div>
                <LandingPageHeader />
                <LandingPageNavbar />
                <About />
                <AboutUsVideo />
                <Footer />
            </div>
        );
    }

}

export default AboutUs;