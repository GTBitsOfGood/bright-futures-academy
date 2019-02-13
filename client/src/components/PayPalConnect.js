import React, { Component } from 'react';
import Button from 'react-bootstrap/Button'

/**
 * This is the PayPal connection component for the second page of the account payment portal.
 * This component will have the user connect to paypal so we can continue with the transaction.
 * TODO: Add styling
 */
class PayPalConnect extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            totalFee: 0.0, // TODO: replace these values with money values.
            tax: 0.0,
            paymentTotal: 0.0 // TODO: Make a state for checking to see if the user is connected to paypal already
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    /**
     * Handles confirmation of the payment and will (eventually) route to new page.
     * @param {} event 
     */
    handleSubmit(event) {
        alert('Connect to PayPal!');

        // TODO: Add logic to handle connecting to paypal and call back.
    }

    /**
     * TODO: style.
     * TODO: replace divs with React.Fragment (https://getstream.io/blog/react-fragments/)
     */
    render() {
        return (
            <div>
                <div>
                    <span>
                        <p>Total Fee: </p> {"$" + this.state.totalFee}
                    </span>
                    <p>Tax: </p> {"$" + this.state.tax}
                    <h5>Payment Total: </h5> {"$" + this.state.paymentTotal}
                </div>
                <Button
                    variant="primary"
                    as="input"
                    onClick={this.handleSubmit}
                    value="Connect to PayPal"
                ></Button>
            </div>
        );
    }
}

export default PayPalConnect;
