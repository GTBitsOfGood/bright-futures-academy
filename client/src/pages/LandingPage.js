import React, { Component } from 'react';
import LandingPageNavbar from './../components/LandingPageNavbar';

/**
 * Our Landing Page! This is what the parent will see before they sign in.
 */
class LandingPage extends Component {

  constructor(props) {
    super(props);

    this.state = {
    }
  }

  render() {
    return (
      <LandingPageNavbar />
    );
  }
}

export default LandingPage;