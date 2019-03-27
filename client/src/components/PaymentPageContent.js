import React, { Component } from 'react';
import { ChargesList, Confirmation, MemoTotal, Receipt, PayPalConnect } from './';

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
    const { activities, currentPage, onClickNextPage } = this.props;
    switch (currentPage) {
      case 1:
        return (
          <div>
            <ChargesList className="ChargesList" activities={activities} />
            <MemoTotal onClickNextPage={onClickNextPage} />
          </div>
        );
      case 2:
        return (
          <div>
            <PayPalConnect onClickNextPage={onClickNextPage} />
          </div>
        );
      case 3:
        return (
          <div>
            <Confirmation onClickNextPage={onClickNextPage} />
          </div>
        )
      case 4:
        return (
          <div>
            <Receipt />
          </div>
        )
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
