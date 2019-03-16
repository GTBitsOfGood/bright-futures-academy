import React, { Component } from 'react';
import { Button } from 'reactstrap';
import check from './../images/check.svg';
import './css/Confirmation.css';

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
      this.props.onClickNextPage();
      // TODO: logic to go to next page.
    }

    /**
     * TODO: style these components so they look less like booty.
     */
    render() {
        return (
          <form className="center">

            <p>Thank you!</p>
            <img src={check} />
            <p>We have confirmed your payment.</p>
            <Button onClick={this.handleSubmit} outline color="primary">See Receipt Details</Button>
            
          </form>
        );
    }
}

export default Confirmation;
