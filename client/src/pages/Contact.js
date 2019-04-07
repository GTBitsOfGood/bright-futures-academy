import React, { Component } from 'react';
import { Footer, LandingPageHeader, LandingPageNavbar, ContactUs } from './../components';

class Contact extends Component {

    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return (
            <div>
                <LandingPageHeader />
                <LandingPageNavbar />
                <ContactUs />
                <Footer />
            </div>
        );
    }
}

export default Contact;
