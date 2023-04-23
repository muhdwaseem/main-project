import React from 'react'
import { Navbar, Nav } from "react-bootstrap";

function Navbar1() {
  return (
  
       <div >
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#">My App</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse id="navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#">Home</Nav.Link>
          <Nav.Link href="#">About</Nav.Link>
          <Nav.Link href="#">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </div>
   
  )
}

export default Navbar1
