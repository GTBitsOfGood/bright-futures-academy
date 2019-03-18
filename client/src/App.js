import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import PaymentPortal from './pages/ParentPortal';
import Login from './pages/Login';
import PaymentPage from './pages/PaymentPage';
import NoMatch from './pages/NoMatch';
import LandingPage from './pages/LandingPage';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

// Adding redux to top level
import { Provider } from "react-redux";
import store from "./store/store";

// Adding FontAwesome Logos
library.add(fab, faPhone);

//TODO: Add more pages for routing.
const App = () => (
  // Provider for our redux store
  <Provider store={store}>
    <Router>
      <Switch>
      <Route path="/login" component={Login} />
      <Route path="/makePayment" component={PaymentPortal} />
      <Route path="/paymentPage" component={PaymentPage} />
      <Route path="/landingPage" component={LandingPage}/>
      <Route component={NoMatch} />
      </Switch>
    </Router>
  </Provider>
);

export default App;