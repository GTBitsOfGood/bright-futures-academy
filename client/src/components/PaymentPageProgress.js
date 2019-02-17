import React, { Component } from 'react';
import 'react-step-progress-bar/styles.css';
import { ProgressBar, Step } from 'react-step-progress-bar';

/**
 * The bubbles o(≧∇≦o) that show the user how many of the pages they have completed.
 */
class PaymentPageProgress extends Component {
  constructor(props) {
    super(props);
    
    this.progressPercentage = this.progressPercentage.bind(this);
    this.makeSteps = this.makeSteps.bind(this);

    this.state = {
      currentPage: this.props.currentPage,  // We will be starting from page 1 to Nth page.
      numPages: this.props.numPages
    }
  }

  /**
   * Calculates the current percent that the bar has completed.
   */
  progressPercentage() {
    return ((this.props.currentPage - 1.0)/(this.props.numPages - 1.0)) * 100.0; // Mathematics magic
  }

  /**
   * Makes the numbers (1 to the number of pages) above the progress bar so the user
   * can see their progress with the number of pages.
   */
  makeSteps() {
    var steps = [...Array(this.state.numPages + 1)].map((_,i) => i); // creating an array from 0 to num pages
    steps.shift();  // removing first index since we want an array from 1 to num pages
    return steps.map(function(d, id) {
      return (
        <Step transition="scale" index={d}>
          {({ accomplished }) => (
            <p>{d}</p>
          )}
        </Step>
      );
    })
  }

  // Currently printing out the current page number.
  // TODO: Add logic to switch between the of different pages
  // TODO: Add styling
  render() {
    return (
      <ProgressBar
        percent={this.progressPercentage()}
        filledBackground="linear-gradient(to right, #66BB6A, #66BB6A)"
      >
        {this.makeSteps()}
      </ProgressBar>
    );
  }
}

export default PaymentPageProgress;
