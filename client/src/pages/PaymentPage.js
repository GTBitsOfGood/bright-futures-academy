import React, { Component } from 'react';
import { PrimaryNavBar, PaymentPageContent, PaymentPageProgress } from './../components';
import "./css/PaymentPageOne.css";


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

    this.onClickNextPage = this.onClickNextPage.bind(this);
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
        <PrimaryNavbar />
        <div className="container">
          <h2>Account Payment</h2>
          <div className="ProgressBar"><PaymentPageProgress currentPage={currentPage} numPages={NUM_PAGES} /></div>
          <div className="PaymentPageContent"><PaymentPageContent currentPage={currentPage} activities={activities} onClickNextPage={this.onClickNextPage}/></div>
        </div>
      </div>
    );
  }

  onClickNextPage() {
    // TODO: create a Model.js file which holds an array of all possible pages, among other things
    // TODO: use pages array from Model.js to robustly update currentPage
    this.setState({currentPage: this.state.currentPage + 1});
  }
}

export default PaymentPage;
