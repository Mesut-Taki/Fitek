import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { StyledContainer } from "./Topbar.styles.js";

const Topbar = () => {
  return (
    <StyledContainer>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">FiTeknoloji</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home">Stok Yonetimi</Nav.Link>
              <Nav.Link href="#link">Satis Yonetimi</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Login</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Satin Alma
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4"></NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </StyledContainer>
  );
};

export default Topbar;
