import React, { Suspense } from 'react';
import NavBar from '../NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { About, Contacts, Home } from '../../pages';
import Footer from '../Footer/Footer';

export default function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contacts" component={Contacts} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}
