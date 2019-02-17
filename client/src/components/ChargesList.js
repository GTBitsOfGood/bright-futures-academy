import React, { Component } from 'react';
import './PaymentContent.css';

/**
 * Content for page 0.
 */
class PaymentContent0 extends Component {
  constructor(props) {
    super(props);

    // Allows the use of this keyword in the ActivityList function
    this.ActivityList = this.ActivityList.bind(this);
  }

  // TODO: add styling
  ActivityList() {
    const activities = this.props.activities;
    const listItems = activities.map((activity) =>
      <p>{activity.name} - ${activity.price}</p>
    );
    return (
      <div id="ActivityList">
        <div>{listItems}</div>
      </div>
    );
  }

  render() {
    return(
      <div>
        {this.ActivityList()}
      </div>
    );
  }
  
}



export default PaymentContent0;
