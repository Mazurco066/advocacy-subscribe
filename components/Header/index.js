// Libs
import React from 'react'

// Components
import { Navbar, Container, Nav } from 'react-bootstrap'

// Component
export const Header = () => {
  return (
    <Navbar id="navbar">
      <Container>
        <Navbar.Brand href="/">
          <img
            alt="Logo"
            src="/svgs/logo.svg"
            className="d-inline-block align-top logo"
          />
        </Navbar.Brand>
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end"
        >
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}