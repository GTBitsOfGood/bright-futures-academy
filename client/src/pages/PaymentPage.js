import React, { Component } from 'react';

import PaymentPageContent from '../components/PaymentPageContent';
import PaymentPageProgress from '../components/PaymentPageProgress'; // TODO: make a class that will export all these

/**
 * Parent class for Payment Page. Contains the text "Account Payment", then the progress bar through the pages, and a
 * placeholder for the current PaymentPageContent.
 */
class PaymentPage extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
        currentPage: 0 // will be used to determine what page to float to UI (might change to Enum)
    }
  }

  render() {
    return (
      <div>
        <h2>Account Payment</h2>
        <PaymentPageProgress currentPage={this.state.currentPage} />
        <PaymentPageContent currentPage={this.state.currentPage} />
      </div>
    );
  }
}

export default PaymentPage;
