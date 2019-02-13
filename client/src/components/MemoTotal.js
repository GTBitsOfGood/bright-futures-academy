import React, { Component } from 'react';


/**
 * This is the Memo and total component for the first page of the account payment portal.
 * This component will add the memo, and show the total activity fees
 * TODO: Add styling
 */
class MemoTotal extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            memoText: "",
            totalFee: 0.0, // TODO: replace these values with money values.
            tax: 0.0,
            paymentTotal: 0.0
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    /**
     * Changes the state of memoText.
     * @param {} event 
     */
    handleChange(event) {
        this.setState({
            memoText: event.target.memoText
        });
    }
    
    /**
     * Handles confirmation of the payment and will (eventually) route to new page.
     * @param {} event 
     */
    handleSubmit(event) {
        alert('Confirmed total and fees: ' + this.state.memoText);

        // TODO: logic to handle submission.
    }

    /**
     * TODO: style these components so they look less like booty.
     */
    render() {
        return (
          <form onSubmit={this.handleSubmit}>
            <label>
              Memo: 
              <input type="text" value={this.state.memoText} onChange={this.handleChange} />
            </label>
            <div>
                <p>Total Fee: </p> {"$" + this.state.totalFee}
                <p>Tax: </p> {"$" +this.state.tax}
            </div>
            <hr></hr>
            <div>
                <p>Payment Total: </p> {"$" +this.state.paymentTotal}
            </div>
            <input type="submit" value="Choose Payment Method" />
          </form>
        );
    }
}

export default MemoTotal;
