import React, { Component } from 'react';
import { Button } from 'reactstrap';
import logoImage from './../images';
import { ChargesList } from './'
import './css/Receipt.css';

/**
 * Parent class for Receipt Page. Contains labels and placeholder data to be retrieved by the API.
 */
class Receipt extends Component {

  constructor(props) {
    super(props);

    this.state = {
        activities: [],
        paymentInfo: {}
    }

    this.onClickGetPDF = this.onClickGetPDF.bind(this);
  }

  componentDidMount() {
    // TODO: activities, total, and payment info are placeholders, to be replaced with an API call
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
      <div className="receipt">
        <div className="border">
          <h4>Receipt</h4>

          <div className="address">
            <span>
              <img id="brightFuturesLogo" className="rightWithFloat" src={logoImage} height="150" alt="Bright Futures Academy Logo"/>
              <div className="leftWithFloat">
                Bill From:
                <br /> {paymentInfo.billFromName}
                <br /> {paymentInfo.billFromAddressLine1}
                <br /> {paymentInfo.billFromAddressLine2}
              </div>
            </span>
          </div>
          <div className="address">
            <span>
              <div className="leftWithFloat">
              Bill To:
                <br /> {paymentInfo.billToName}
                <br /> {paymentInfo.billToAddressLine1}
                <br /> {paymentInfo.billToAddressLine2}
              </div>
              <div className="rightWithFloat">
                <br />Invoice Number #: {paymentInfo.invoiceNum}
                <br />Invoice Date: {paymentInfo.invoiceDate}
                <br /> <p className="blueBackground">Amount Due: {"$" + paymentInfo.total}</p>
              </div>
            </span>
          </div>

          <div className="chargesList">
            <ChargesList activities={activities}/>
          </div>
          <div className="rightWithFloat wrap">
            <p>Subtotal: {paymentInfo.subtotal}
            <br />Tax: {paymentInfo.tax}
            <br /><p className="blueBackground">Total: {paymentInfo.total}</p>
            </p>
          </div>
        </div>
          <form onSubmit={this.onClickGetPDF} className="center">
          <Button outline type="submit" color="primary">Download PDF</Button>
          </form>
      </div>
    );
  }

  onClickGetPDF() {
      // TODO: allow information on page to be downloaded as pdf
      alert("Get pdf of Receipt");
  }
}

export default Receipt;
