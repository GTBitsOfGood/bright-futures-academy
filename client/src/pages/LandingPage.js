import React, { Component } from 'react';
import { Footer, LandingPageHeader, LandingPageNews, LandingPageNavbar, AboutUs, Teachers, Infographic, Spotlight } from './../components';

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
        <LandingPageHeader />
        <LandingPageNavbar />
        <LandingPageNews />
        <AboutUs />
        <Infographic />
        <Spotlight />
        <Infographic />
        <Teachers />
        <Footer />
      </div>
    );
  }
}

export default LandingPage;
