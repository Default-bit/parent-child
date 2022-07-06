// import { Navbar } from 'flowbite-react';
import { NavLink, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";

export const NavBar = () => {
  return (
    <div>
      {/* <Nav bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/contracts">Logo</Navbar.Brand>
          <Nav.Link href="/children">Children</Nav.Link>
          <Nav.Link href="/contracts" >Contracts</Nav.Link>
        </Container>
      </Nav> */}

      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/contracts">'Parent-Child'</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/contracts">Contracts</Nav.Link>
              <Nav.Link href="/children">Children</Nav.Link>
              <NavDropdown title="Parent Profile" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Settings</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
