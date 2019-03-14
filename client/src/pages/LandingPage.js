import React, { Component, Fragment } from 'react';
import PrimaryNavbar from './../components/Navbar';
import Footer from './../components/Footer';

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
      <div>
        <PrimaryNavbar />
        <Footer />
      </div>
    );
  }
}

export default LandingPage;