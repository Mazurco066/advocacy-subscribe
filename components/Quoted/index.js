// Libs
import React from 'react'
import Fade from 'react-reveal/Fade'

// Components
import { Container, Row, Col } from 'react-bootstrap'

// Component
export const Quoted = () => {
  return (
    <section id="quoted-section">
      <Fade bottom>
        <Container>
          <Row>
            <Col md="12" className="d-flex justify-content-center mb-3">
              <div className="quote-image">
                <img src="/images/quotes.png" alt="Quote"/>
              </div>
            </Col>
            <Col md="12" className="mb-5">
              <h2 className="text-center text-uppercase">
                Nós tempos a experiência e a confiança que você procura
              </h2>
            </Col>
            <Col md="12" className="pt-3">
              <p className="text-justify quote-text mb-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <h5 className="text-center">
                (X Pessoa falou isso)
              </h5>
            </Col>
          </Row>
        </Container>
      </Fade>
    </section>
  )
}