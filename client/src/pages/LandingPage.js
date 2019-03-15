import React, { Component } from 'react';
import LandingPageHeader from '../components/LandingPageHeader';

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
      <LandingPageHeader />
    );
  }
}

export default LandingPage;