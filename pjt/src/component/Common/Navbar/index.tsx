import React from "react";

import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

const NavbarCustom: React.FC = () => {
  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/home"></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/dc">Daily Check</Nav.Link>
            <Nav.Link href="/fc">Flow Chart</Nav.Link>
            <Nav.Link href="/si">SignIn</Nav.Link>
            <Nav.Link href="/su">SignUp</Nav.Link>

            <NavDropdown
              id="nav-dropdown-dark-example"
              title="Dropdown"
              menuVariant="dark"
            >
              <NavDropdown.Item href="/dc">Daily Check</NavDropdown.Item>
              <NavDropdown.Item href="/fc">Flow Chart</NavDropdown.Item>
              <NavDropdown.Item href="/si">SignIn</NavDropdown.Item>
              <NavDropdown.Item href="/su">SignUp</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarCustom;
