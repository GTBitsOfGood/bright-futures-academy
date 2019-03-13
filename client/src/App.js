import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import PaymentPortal from './pages/ParentPortal';
import PaymentPage from './pages/PaymentPage';
import NoMatch from './pages/NoMatch';
import LandingPage from './pages/LandingPage';

//TODO: Add more pages for routing.
const App = () => (
  <Router>
    <div>
      <Switch>
      <Route path="/makepayment" component={PaymentPortal} />
      <Route path="/paymentPage" component={PaymentPage} />
      <Route path="/landingPage" component={LandingPage}/>
      <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
);


export default App;
