import React, { Component } from 'react';
import { PayPalButton } from 'react-paypal-button-v2';
import './css/PayPalConnect.css'
import { ReactIsInDevelomentMode } from './../components/Utils';

/**
 * This is the PayPal connection component for the second page of the account payment portal.
 * This component will have the user connect to paypal so we can continue with the transaction.
 * TODO: Add styling
 */

const ACTIVITY_API_DEV = "http://localhost:5000/api/activity/";
const ACTIVITY_API_PROD = "https://bright-futures-academy-dev.herokuapp.com/api/activity/";

class PayPalConnect extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // TODO: get all of this information from Redux store
            totalFee: 0.01,
            tax: 0.0,
            paymentTotal: 0.01, 
            householdId: '5ca780096bf2281dd453bdd8',
            studentId: '5ca7802e6bf2281dd453bdd9'
        }
    }

    onSuccess = (info) => {
        console.log(info)
        const { householdId, studentId } = this.state
        const { amount, id } = info.purchase_units[0]
        var serverUrl = ReactIsInDevelomentMode()
            ? ACTIVITY_API_DEV
            : ACTIVITY_API_PROD
        serverUrl += `${householdId}/${studentId}/`

        fetch(serverUrl, {
            method: "post",
            body: JSON.stringify({
                amount: -amount,
                paypal_id: id,
                name: 'PayPal Payment'
            })
        })
            .then(() => this.props.onClickNextPage())
    }

    onError = (err) => {
        alert("Sorry, we encountered an error while processing your payment. Please try again.")
        console.log(err.message)
    }

    onCancel = (data) => {
        alert("Payment canceled.")
    }

    createOrder = (data, actions) => {
        const { totalFee } = this.state
        return actions.order.create({
            purchase_units: [{
                amount: {
                    value: totalFee
                }
            }]
        })
    }

    /**
     * TODO: style.
     * TODO: replace divs with React.Fragment (https://getstream.io/blog/react-fragments/)
     */
    render() {
        const { totalFee, tax, paymentTotal } = this.state;
        const CLIENT_ID = ReactIsInDevelomentMode()
            ? 'sb'
            : process.env.REACT_APP_PAYPAL_PROD_CLIENT_ID
        const options = {
            currency: "USD",
            clientId: CLIENT_ID
        }
        return (
            <div className="center">
                <div className="left">
                    <span>
                        <p>Total Fee: </p> {"$" + totalFee}
                    </span>
                    <br />
                    <span>
                        <p>Tax: </p> {"$" + tax}
                    </span>
                    <br />
                    <span>
                        <h5>Payment Total: </h5> {"$" + paymentTotal}
                    </span>
                </div>
                <br />
                <PayPalButton
                    amount={totalFee}
                    createOrder={this.createOrder}
                    onCancel={this.onCancel}
                    onError={this.onError}
                    onSuccess={this.onSuccess}
                    options={options}
                />
            </div >
        );
    }
}

export default PayPalConnect;
