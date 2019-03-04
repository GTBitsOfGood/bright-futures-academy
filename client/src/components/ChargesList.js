import React, { Component } from 'react';
import './css/PaymentContent.css';

/**
 * List of charges to student account, names + prices retrieved from backend
 */
class ChargesList extends Component {
  constructor(props) {
    super(props);

    // Allows the use of this keyword in the ActivityList function
    this.ActivityList = this.ActivityList.bind(this);
  }

  // TODO: add styling
  ActivityList() {
    const activities = this.props.activities;
    const listItems = activities.map((activity) =>
      <p>{activity.name} :  <span>${activity.price}</span></p>
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



export default ChargesList;
