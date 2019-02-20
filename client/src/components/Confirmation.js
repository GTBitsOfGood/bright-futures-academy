import React, { Component } from 'react';
import check from './../images/check.svg';

/**
 * This is the Confirmation component for the third page of the account payment portal.
 * TODO: Add more styling
 */
class Confirmation extends Component {
    constructor(props) {
        super(props)

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    /**
     * Will eventually route to next page.
     * @param {} event
     */
    handleSubmit(event) {
        // TODO: logic to go to next page.
    }

    /**
     * TODO: style these components so they look less like booty.
     */
    render() {
        return (
          <form onSubmit={this.handleSubmit}>

            <p>Thank you!</p>
            <img src={check} />
            <p>We have confirmed your payment.</p>
            <input type="submit" value="See Receipt Details" />
            
          </form>
        );
    }
}

export default Confirmation;
