import React, { Component } from 'react';
import { Footer, About, LandingPageHeader, LandingPageNavbar, Leadership } from './../components';

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
                <Leadership />
                <Footer />
            </div>
        );
    }

}

export default AboutUs;
