import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import { PaymentPortal, Contact, AboutUs, Login, PaymentPage, NoMatch, LandingPage, EventsPage, AcademicsPage } from './pages';
import { PrivateRoute } from "./auth";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

// Auth stuff
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentHousehold, logoutHousehold } from "./actions/authActions";

// Adding redux to top level
import { Provider } from "react-redux";
import store from "./store/store";

// Adding FontAwesome Logos
library.add(fab, faPhone);

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentHousehold(decoded));
  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutHousehold());
    // Redirect to login
    window.location.href = "./login";
  }
}

//TODO: Add more pages for routing.
const App = () => (
  // Provider for our redux store
  <Provider store={store}>
    <Router>
      <Switch>
        {/* Pages that can be accessed by anyone */}
        <Route path="/login" component={Login} />
        <Route path="/events" component={EventsPage} />
        <Route path="/aboutUs" component={AboutUs} />
        <Route path="/contact" component={Contact} />
        <Route path="/academics" component={AcademicsPage} />

        {/* Pages that should only be accessed by an authenticated user */}
        <PrivateRoute path="/makePayment" component={PaymentPortal} />
        <PrivateRoute path="/paymentPage" component={PaymentPage} />

        {/* Landing Page */}
        <Route path="/" component={LandingPage} />
        <Route component={NoMatch} />
      </Switch>
    </Router>
  </Provider>
);

export default App;
