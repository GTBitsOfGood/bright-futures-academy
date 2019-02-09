import React, { Component } from 'react';

/**
 * Container for payment page content. Each page's content will be different, but switched here.
 */
class PaymentPageContent extends Component {
  constructor(props) {
    super(props);
  }

  // currently printing out the current page number.
  // TODO: Add logic to switch between content of different pages
  // TODO: Add styling
  render() {
  return (
    <div>
      <h3>{this.props.currentPage}</h3>
    </div>
    );
  }
}

export default PaymentPageContent;
