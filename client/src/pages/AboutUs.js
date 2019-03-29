import React, { Component } from 'react';
import { Footer, About, LandingPageHeader, LandingPageNavbar } from './../components';


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
                <Footer />
            </div>
        );
    }

}

export default AboutUs;