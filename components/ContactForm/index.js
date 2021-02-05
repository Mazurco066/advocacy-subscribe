// Libaries
import React, { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

// Components
import { Form, Row, Col, Container } from 'react-bootstrap'
import { Button } from '../Button'

// Validation schema
const ContactSchema = Yup.object().shape({
  name: Yup.string().required('required'),
  email: Yup.string().required('required'),
  phone: Yup.string().required('required'),
  message: Yup.string().required('required')
})

// Form initial values
const initialValues = {
  name: '',
  email: '',
  phone: '',
  message: ''
}

// Component
export const ContactForm = () => {

  // Page states
  const [submitting, setSubmitting] = useState(false)

  // Formik configuration
  const formik = useFormik({
    initialValues: { ...initialValues },
    validationSchema: ContactSchema,
    onSubmit: (values, { setSubmitting }) => {
      setSubmitting(true)
      console.log('[SUBMIT]', values)
      setSubmitting(false)
    }
  })

  // JSX
  return (
    <section id="contact-section">
      <Container>
        <Form onSubmit={formik.handleSubmit}>
          <Row>
            <Col lg="12" md="12" sm="12">
              <input 
                id="name"
                name="name"
                placeholder="Nome"
                value={formik.values.name}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
              />
            </Col>
          </Row>
          <Row>
            <Col lg="12" md="12" sm="12">
              <input 
                id="email"
                name="email"
                placeholder="E-mail"
                value={formik.values.email}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
              />
            </Col>
          </Row>
          <Row>
            <Col lg="12" md="12" sm="12">
              <input 
                id="phone"
                name="phone"
                placeholder="Telefone"
                value={formik.values.phone}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
              />
            </Col>
          </Row>
          <Row>
            <Col lg="12" md="12" sm="12">
              <input 
                id="message"
                name="message"
                placeholder="Mensagem"
                value={formik.values.message}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
              />
            </Col>
          </Row>
          <Row>
            <Button type="submit" text="Enviar formulário"/>
          </Row>
        </Form>
      </Container>
    </section>
  )
}