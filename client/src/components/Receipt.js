import React, { Component } from 'react';
import logoImage from './../images';
import ChargesList from './ChargesList';
import './css/PaymentContent.css';

/**
 * Parent class for Payment Page. Contains the text "Account Payment", then the progress bar through the pages, and a
 * placeholder for the current PaymentPageContent.
 */
class Receipt extends Component {

  constructor(props) {
    super(props);

    this.state = {
        activities: [],
        paymentInfo: {}
    }
  }

  componentDidMount() {
    // activities, total, and payment info are placeholders, to be replaced with an API call
    const activities = [{name:"Activity Fee", price:"400"}, {name:"Uniform Fee", price:"40"}, {name:"Transportation Fee", price:"40"}, {name:"Textbook Fee", price:"40"}];
    const paymentInfo = {
      billFromName:"Bright Futures Academy", 
      billFromAddressLine1: "123 Ferst Drive",
      billFromAddressLine2: "Atlanta, GA 30314",
      billToName: "User ID", 
      billToAddressLine1: "321 Techwood Drive",
      billToAddressLine2: "Buckhead, GA 30305",
      invoiceNum: 123456789, 
      invoiceDate: "00/00/00", 
      total: 0.00,
      subtotal: 0.00,
      tax: 0.00
    }
    this.setState({ activities: activities, paymentInfo: paymentInfo});
  }

  render() {
    const { activities, paymentInfo } = this.state;
    return (
      <div>
        <h4>Receipt</h4>
        <img src={logoImage} height="300" alt="Bright Futures Academy Logo"/>

        <div>
          <p>Bill From: 
          <br /> {paymentInfo.billFromName}
          <br /> {paymentInfo.billFromAddressLine1}
          <br /> {paymentInfo.billFromAddressLine2} 
          <br />
          <br />Bill To:
          <br /> {paymentInfo.billToName}
          <br /> {paymentInfo.billToAddressLine1}
          <br /> {paymentInfo.billToAddressLine2}
          <br />
          <br />Invoice Number #: {paymentInfo.invoiceNum}
          <br />Invoice Date: {paymentInfo.invoiceDate}
          <br />Amount Due: {"$" + paymentInfo.total}
          </p>
        </div>
       
        <br />
        <ChargesList activities={activities}/>
        <br />

        <div>
          <p>Subtotal: {paymentInfo.subtotal}
          <br />Tax: {paymentInfo.tax}
          <br />Total: {paymentInfo.total}
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
