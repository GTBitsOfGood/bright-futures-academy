import React, { Component } from 'react';
import './css/Calendar.css';

/**
 * Google Calendar component for displaying events from brightfuturesacademyDev@gmail.com.
 */
class Calendar extends Component {
    constructor(props) {
        super(props);
        
        this.state = {

        }
    }

    render() {
        return (
            <div className="calendarBackground">
                <iframe title="stuff" src="https://calendar.google.com/calendar/embed?src=brightfuturesacademydev%40gmail.com&ctz=America%2FNew_York" style={{border: 0}} width="800" height="600" frameBorder="0" scrolling="no"></iframe>
            </div>
        );
    }
}

export default Calendar;