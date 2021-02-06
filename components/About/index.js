// Libs
import React from 'react'

// Components
import { Container, Row, Col } from 'react-bootstrap'
import { SectionTitle } from '../SectionTitle'
import { segments } from '../../utils'

// Component
export const About = () => {

  const numberOfCols = (12 / segments.length).toString()
  
  return (
    <section id="about-section">
      <SectionTitle title="Nossa área de atuação" />
      <Container>
        <Row>
          {segments.map(({ description, iconPath, title }, i) => (
            <Col key={i} lg={numberOfCols} md="12" sm="12">
              <div className="d-flex flex-column align-items-center segment-item">
                <h5 className="text-center text-uppercase mb-2 text-primary">
                  {title}
                </h5>
                <div className="section-logo">
                  <img src={iconPath} alt="Section"/>
                </div>
                <p className="text-muted text-center px-3">
                  {description}
                </p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}