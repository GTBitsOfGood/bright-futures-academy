import React, { Component } from 'react';
import ChargesList from './ChargesList';

/**
 * Container for payment page content. Each page's content will be different, but switched here.
 */
class PaymentPageContent extends Component {
  constructor(props) {
    super(props);
  }

  // currently printing out the current page number.
  // TODO: Add more cases to switch between content of different pages
  // TODO: Add styling
  render() {
    switch (this.props.currentPage) {
      case 0:
        return (
          <div>
            <ChargesList activities={this.props.activities}/>
          </div>
        );
    }

    // never gets called
    return (
      <div>
        <h3>{this.props.currentPage}</h3>
      </div>
      );
  }
}

export default PaymentPageContent;
