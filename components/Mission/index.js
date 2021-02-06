// Libs
import React from "react";

// Components
import { Container, Row, Col } from "react-bootstrap";
import { SectionTitle } from "../SectionTitle";

// Component
export const Mission = () => {
  return (
    <section id="mission-section">
      <Container>
        <Row>
          <Col lg="9" md="12" sm="12" className="pt-0 pt-lg-5 mt-0 mt-lg-4">
            <SectionTitle title="Nossa Missão" />
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
          <Col lg="3" md="12" sm="12" className="d-none d-lg-block">
            <div className="mission-image">
              <img src="/images/contract.png" alt="Contract" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
