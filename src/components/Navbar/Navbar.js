import React from "react";
import "../Navbar/Navbar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Imgzamon from "../imgs/zamon.svg.png";
import Imgtelegram from "../imgs/icons8-telegram-94.png";
import Imginstagram from "../imgs/icons8-instagram-logo-100.png";

function AppNavbar() {
  return (
    <Navbar expand="lg"  className="bg-body-tertiary" data-bs-theme="blue">
      <Container className="navbarcolor">
        <Navbar.Brand href="#home">
          <div style={{textAlign: "center"}}>
            <img
              src={Imgzamon}
              alt="Zamon Logo"
              style={{width: "159px", height: "41px"}}
            />
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
            <Nav.Link href="#link">Tours</Nav.Link>
            <Nav.Link href="#link">Contacts</Nav.Link>
            <NavDropdown
              title="Language"
              id="basic-nav-dropdown"
              className="language"
            >
              <NavDropdown.Item href="#action/3.1">Uzb</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Rus</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Eng</NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
            <Nav.Link href="#link">
              <img src={Imginstagram} alt="instagram" />
            </Nav.Link>
			<Nav.Link href="#link">
              <img src={Imgtelegram} alt="instagram" />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;
