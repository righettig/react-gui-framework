import React from 'react';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';

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
        { /* default route */ }
        <Route path='/'>
          <Orders />
        </Route>
        {
          props.modules.map((module) =>
            <Route path={'/' + module.displayName}>
              <Orders />
            </Route>
          )
        }
      </Switch>
    </Router>
  )
}

function Orders() {
  return <h2>Orders</h2>;
}