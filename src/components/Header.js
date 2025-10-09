import React from 'react';
import { Navbar, Nav, Container, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <Navbar bg="white" expand="lg" className="mb-4 border-bottom">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <Image src="/assets/taskflow.png" alt="TaskFlow" height="80" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/add">Add Task</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
