import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './style.css';
import { Header } from './Header/header';
import { Footer } from './Footer/footer';
import { Home } from './Home/home';
import { Reservation } from './Reservation/reservation';

export const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact /*children={Uvodni}*/>
          <Home />
        </Route>
        <Route path="/reservation" exact>
          <Reservation />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
};
