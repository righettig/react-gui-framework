import React from 'react';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Menu(props) {
  return <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">INTL</Navbar.Brand>
    <Nav className="mr-auto">
      {
        props.modules.map((module) =>
          <Nav.Link href="#home">{module.displayName}</Nav.Link>
        )
      }
    </Nav>
  </Navbar>
}