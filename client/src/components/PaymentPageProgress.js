import React, { Component } from 'react';

/**
 * The bubbles o(≧∇≦o) that show the user how many of the pages they have completed.
 */
class PaymentPageProgress extends Component {
  constructor(props) {
    super(props);
  }

  // Currently printing out the current page number.
  // TODO: Add logic to switch between the of different pages
  // TODO: Add styling
  render() {
    return (
      <div>
        <h1>{this.props.currentPage}</h1>
      </div>
    );
  }
}

export default PaymentPageProgress;
