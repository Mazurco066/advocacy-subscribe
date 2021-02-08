// Libs
import React from 'react'
import Fade from 'react-reveal/Fade'

// Components
import { Container, Row, Col } from 'react-bootstrap'
import { Button } from '../Button'
import { SectionTitle } from '../SectionTitle'
import { segments } from '../../utils'

// Component
export const About = () => {

  const numberOfCols = (12 / segments.length).toString()
  
  return (
    <section id="about-section">
      <Fade bottom big>
        <Container>
          <Row>
            <Col md="12">
              <SectionTitle title="Nossa área de atuação" />
            </Col>
          </Row>
        </Container>
        <Container>
          <Row className="mb-5">
            {segments.map(({ description, iconPath, title }, i) => (
              <Col key={i} lg={numberOfCols} md="12" sm="12">
                <div className="d-flex flex-column align-items-center segment-item">
                  <h5 className="text-center text-uppercase mb-2 text-primary">
                    {title}
                  </h5>
                  <div className="section-logo">
                    <img src={iconPath} alt="Section" />
                  </div>
                  <p className="text-muted text-center px-3">{description}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
        <Container>
          <Row>
            <Col md="12">
              <SectionTitle title="Sobre Vercel Advocacia" />
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col md="6" lg="6" sm="12">
              <div className="about-image">
                <img src="/images/office.jpg" alt="Office" />
              </div>
            </Col>
            <Col md="6" lg="6" sm="12">
              <p className="text-indent">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <p className="text-indent mb-3">
                Nossa advocacia fica localizada em: Lorem ipsum dolor sit amet,
                consectetur adipiscing elit.
              </p>
              <Button text="Ver no Mapa" />
              <Button text="Conversar com um Advogado" />
            </Col>
          </Row>
        </Container>]
      </Fade>
    </section>
  );
}