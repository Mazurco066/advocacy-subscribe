// Libs
import React from 'react'
import Fade from 'react-reveal/Fade'

// Components
import { Container, Row, Col } from 'react-bootstrap'
import { Button } from '../Button'

// Component
export const Featured = () => {
  return (
    <section id="featured-banner">
      <div className="color-overlay"></div>
      <Fade bottom>
        <Container>
          <Row>
            <Col md="6"></Col>
            <Col className="py-5" sm="12" md="6" lg="6">
              <h2 className="mb-3 mt-4">
                Você procura um Advogado para sua causa?
              </h2>
              <p className="mb-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna 
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <Button text="Entrar em Contato"/>
            </Col>
          </Row>
        </Container>
      </Fade>
    </section>
  )
}