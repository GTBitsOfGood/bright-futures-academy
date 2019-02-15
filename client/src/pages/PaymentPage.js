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
        currentPage: 1, // will be used to determine what page user is on. We start at page 1, end on numPages
        numPages: 4,
        activities: [{name:"Activity Fee", price:"400"}, {name:"Uniform Fee", price:"40"}, {name:"Transportation Fee", price:"40"}, {name:"Textbook Fee", price:"40"}]
    }

  }

  render() {
    return (
      <div>
        <h2>Account Payment</h2>
        <PaymentPageProgress currentPage={this.state.currentPage} numPages={this.state.numPages}/>
        <PaymentPageContent currentPage={this.state.currentPage} activities={this.state.activities}/>
      </div>
    );
  }
}

export default PaymentPage;
