import React, { Component } from 'react';
import Footer from './../components/Footer';
import LandingPageHeader from '../components/LandingPageHeader';
import LandingPageNews from '../components/LandingPageNews';

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
          <LandingPageNews />
          <Footer />
        </div>
    );
  }
}

export default LandingPage;