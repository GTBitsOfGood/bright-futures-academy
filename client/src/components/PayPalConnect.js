import React, { Component } from 'react';
import { Button } from 'reactstrap';
import './css/PayPalConnect.css'
import {ReactIsInDevelomentMode} from './../components/Utils';

/**
 * This is the PayPal connection component for the second page of the account payment portal.
 * This component will have the user connect to paypal so we can continue with the transaction.
 * TODO: Add styling
 */

const API_PAYPAL_DEV = "http://localhost:5000/api/pay/";
const API_PAYPAL_PROD = "";

class PayPalConnect extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            totalFee: 0.0, // TODO: replace these values with money values.
            tax: 0.0,
            paymentTotal: 0.0 , // TODO: Make a state for checking to see if the user is connected to paypal already
            url: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

        

    componentDidMount() {
        let urlToFetch = API_PAYPAL_PROD;
        if (ReactIsInDevelomentMode()){
          //Fetch the student list
          urlToFetch = API_PAYPAL_DEV + '5c8680ffad46ec4f26e7b46f';
    }
    const{ amount, householdId, studentId } = this.state
    fetch(urlToFetch, {
        method: "post",
        body: JSON.stringify({
            amount,
            householdId, 
            studentId
        })
    })
    .then(response => this.setState({url: response}))
    }
    /**
     * Handles confirmation of the payment and will (eventually) route to new page.
     * @param {} event 
     */
    handleSubmit(event) {
        window.open(this.state.url);
        this.setState({url: ""});
    }

    /**
     * TODO: style.
     * TODO: replace divs with React.Fragment (https://getstream.io/blog/react-fragments/)
     */
    render() {
        return (
            <div className="center">
                <div className="left">
                    <span>
                        <p>Total Fee: </p> {"$" + this.state.totalFee}
                    </span>
                    <br/>
                    <span>
                        <p>Tax: </p> {"$" + this.state.tax}
                    </span>
                    <br/>
                    <span>
                        <h5>Payment Total: </h5> {"$" + this.state.paymentTotal}
                    </span>
                </div>
                <br/>
                <Button outline onClick={this.handleSubmit} color="primary">Connect to PayPal</Button>
            </div>
        );
    }
}

export default PayPalConnect;
