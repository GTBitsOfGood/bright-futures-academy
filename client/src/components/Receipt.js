import React, { Component } from 'react';
import logoImage from './../images';
import ChargesList from './ChargesList';
import './css/PaymentContent.css';

const NUM_PAGES = 4;

/**
 * Parent class for Payment Page. Contains the text "Account Payment", then the progress bar through the pages, and a
 * placeholder for the current PaymentPageContent.
 */
class Receipt extends Component {

  constructor(props) {
    super(props);

    this.state = {
        currentPage: 1, // will be used to determine what page user is on. We start at page 1, end on numPages
        activities: [],
    }
  }

  componentDidMount() {
    // activities, total, and payment info are placeholders, to be replaced with an API call
    const activities = [{name:"Activity Fee", price:"400"}, {name:"Uniform Fee", price:"40"}, {name:"Transportation Fee", price:"40"}, {name:"Textbook Fee", price:"40"}];
    this.setState({ activities: activities });
  }

  render() {
    const { activities, currentPage } = this.state;
    return (
      <div>
        <h4>Receipt</h4>
        <img src={logoImage} height="300"/>

        <div>
          <p>Bill From: 
          <br />Bill To: 
          <br />Invoice Number #: 
          <br />Invoice Date: 
          <br />Amount Due: 
          </p>
        </div>
       
        <br />
        <ChargesList activities={this.state.activities}/>
        <br />

        <div>
          <p>Subtotal: 
          <br />Tax: 
          <br />Total: 
          </p>
        </div>  
        
        <form onSubmit={this.onClickGetPDF}>
          <input type="submit" value="Download PDF" />
        </form>
      </div>
    );
  }

  onClickGetPDF() {
      // TODO: allow information on page to be downloaded as pdf
  }
}

export default Receipt;
