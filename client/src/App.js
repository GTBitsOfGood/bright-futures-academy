import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import BFSNav from './components/Navbar';
import PaymentPortal from './pages/ParentPortal';
import PaymentPage from './pages/PaymentPage';
import NoMatch from './pages/NoMatch';

//TODO: Add more pages for routing.

const App = () => (
  <Router>
    <div>
      <Switch>
      <Route path="/makepayment" component={PaymentPortal} />
      <Route path="/paymentPage" component={PaymentPage} />
      <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
);


export default App;
