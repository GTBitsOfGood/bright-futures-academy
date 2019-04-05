import React, { Component } from 'react';
import { Footer, Academics, LandingPageHeader, LandingPageNavbar } from './../components';

/**
 * Academics page for more information about teachers.
 */
class AcademicsPage extends Component {

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
                <Academics />
                <Footer />
            </div>
        );
    }

}

export default AcademicsPage;