// Libs
import React from 'react'

// Components
import { Container, Row, Col } from 'react-bootstrap'
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa'

// Component
export const Footer = () => {
  return (
    <footer id="footer">
      <Container>
        <Row>
          <Col md="12" className="d-flex flex-column align-items-center">
            <div>
              <img
                alt="Logo"
                src="/svgs/logo.svg"
                className="logo"
              />
            </div>
            <p className="text-center">
              Copyright © 2021 Vercel Advocacia | Todos os Direitos Reservados
            </p>
            <div className="d-flex justify-content-center pt-4">
              <a href="#" target="_blank" className="social-link">
                <FaFacebook />
              </a>
              <a href="#" target="_blank" className="social-link">
                <FaTwitter />
              </a>
              <a href="#" target="_blank" className="social-link">
                <FaInstagram />
              </a>
              <a href="#" target="_blank" className="social-link">
                <FaYoutube />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}