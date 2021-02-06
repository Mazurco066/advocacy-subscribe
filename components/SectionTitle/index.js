// Libs
import React from 'react'

// Components
import { Container, Row, Col } from 'react-bootstrap'

// Component
export const SectionTitle = ({ title }) => {
  return (
    <Container>
      <Row>
        <Col md="12">
          <h1 className="section-title">{title}</h1>
        </Col>
      </Row>
    </Container>
  )
}