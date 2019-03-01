import React, { Component } from 'react';
import "./css/PaymentPage.css";

// TODO: make an index.js that exports all of these
import PaymentPageContent from '../components/PaymentPageContent';
import PaymentPageProgress from '../components/PaymentPageProgress'; 

// TODO: get this value from new Model.js file described below
const NUM_PAGES = 4;

/**
 * Parent class for Payment Page. Contains the text "Account Payment", then the progress bar through the pages, and a
 * placeholder for the current PaymentPageContent.
 */
class PaymentPage extends Component {

  constructor(props) {
    super(props);

    this.state = {
        currentPage: 1, // will be used to determine what page user is on. We start at page 1, end on numPages
        activities: [],
    }
  }

  componentDidMount() {
    // activities is a placeholder, to be replaced with an API call
    const activities = [{name:"Activity Fee", price:"400"}, {name:"Uniform Fee", price:"40"}, {name:"Transportation Fee", price:"40"}, {name:"Textbook Fee", price:"40"}];
    this.setState({ activities: activities });
  }

  render() {
    const { activities, currentPage } = this.state;
    return (
      <div>
        <h2>Account Payment</h2>
        <div> <PaymentPageProgress currentPage={currentPage} numPages={NUM_PAGES} /></div>
        <PaymentPageContent currentPage={currentPage} activities={activities} onClickNextPage={this.onClickNextPage}/>
      </div>
    );
  }

  onClickNextPage() {
    // TODO: create a Model.js file which holds an array of all possible pages, among other things
    // TODO: use pages array from Model.js to robustly update currentPage
    this.state.currentPage++;
  }
}

export default PaymentPage;
