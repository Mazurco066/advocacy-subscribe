// Libs
import React from 'react'
import { useWindowDimensions } from '../../hooks'

// Components
import { Navbar, Container, Nav } from 'react-bootstrap'

// Component
export const Header = () => {
  const { height, width, yOffset } = useWindowDimensions()
  
  return (
    <Navbar id="navbar" className={{
      'fixed-top-desktop': (height < yOffset && width > 420),
      'fixed-top-mobile': (height < yOffset && width <= 420)
    }}>
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
            <Nav.Link href="#contact-section">Entre em Contato</Nav.Link>
            <Nav.Link className="nav-starred" eventKey={2} href="tel:19999999999">
              Ligue Agora
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}