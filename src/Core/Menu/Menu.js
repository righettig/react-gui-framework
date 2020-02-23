import React from 'react';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { BrowserRouter as Router, Switch, Route, Link, NavLink } from 'react-router-dom';

export default function Menu(props) {
  return (
    <Router>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>INTL</Navbar.Brand>
        <Nav className="mr-auto">
          {
            props.modules.map((module) =>
              <NavLink to={'/' + module.displayName} className="nav-link">{module.displayName}</NavLink>
            )
          }
        </Nav>
      </Navbar>
      <Switch>
        <Route path="/orders">
          <Orders />
        </Route>
        <Route path="/trades">
          <Trades />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}

function Home() {
  return <h2>Home</h2>;
}

function Trades() {
  return <h2>Trades</h2>;
}

function Orders() {
  return <h2>Orders</h2>;
}