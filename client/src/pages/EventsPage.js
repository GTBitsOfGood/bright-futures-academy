import React, { Component } from 'react';
import { Footer, LandingPageHeader, LandingPageNavbar, Calendar } from './../components';

/**
 * Main events page that will display the events for Bright Futures Academy.
 */
class EventsPage extends Component {
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
                <Calendar />
                <Footer />
            </div>
        );
    }
}

export default EventsPage;