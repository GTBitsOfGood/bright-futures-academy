import React, { Component } from 'react';
import PrimaryNavbar from './../components/Navbar';

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
      <PrimaryNavbar />
    );
  }
}

export default LandingPage;