import { Container, Nav, Navbar } from "react-bootstrap";

import React from "react";
import Sidebar from "./siderbar/Siderbar";

function Shahinnav() {
  return (
    
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <ul class="navbar-nav" style={{ position: "initial" }}>
            <Sidebar/>
          </ul>
          <Navbar.Brand href="/">HOME</Navbar.Brand>

          <Nav className="d-flex">
            <Nav.Link href="#home"> REG</Nav.Link>
            <Nav.Link href="#features">LOG</Nav.Link>
            <div class="collapse navbar-collapse" id="navbarNavDropdown"></div>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default Shahinnav;
