// Libs
import React from 'react'

// Components
import { Container, Row, Col } from 'react-bootstrap';
import { SectionTitle } from '../SectionTitle';

// Component
export const Team = () => {
  return (
    <section id="team-section">
      <Container>
        <Row>
          <Col lg="4" md="12" sm="12" className="d-none d-lg-block">
            <div className="mission-image">
              <img src="/images/phone-screen.png" alt="Contract" />
            </div>
          </Col>
          <Col lg="8" md="12" sm="12" className="pt-0 pt-lg-5 mt-0 mt-lg-4">
            <SectionTitle title="Nosso Time" />
            <p className="text-indent">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, 
              consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className="text-indent">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, 
              consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  )
}