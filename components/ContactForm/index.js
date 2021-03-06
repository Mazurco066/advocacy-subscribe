// Libaries
import React, { useState } from 'react'
import Fade from 'react-reveal/Fade'
import { useFormik } from 'formik'
import * as Yup from 'yup'

// Components
import { Form, Row, Col, Container } from 'react-bootstrap'
import { Button } from '../Button'
import { Input } from '../Input'

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
      <Fade bottom>
        <Container>
          <Row>
            <Col md="12">
              <p className="text-center text-uppercase text-white mb-5">
                <strong>Especialistas em direito Penal e direito do Consumidor</strong> 
              </p>
              <h3 className="text-center text-white mb-3">
                Entre em contato conosco
              </h3>
              <p className="text-center text-white mb-3">
                Preencha o formulário abaixo para que nossos advogados 
                entrem em contato para auxiliar em sua causa.
              </p>
            </Col>
          </Row>
          <Form onSubmit={formik.handleSubmit}>
            <Row>
              <Col lg="12" md="12" sm="12">
                <Input 
                  id="name"
                  name="name"
                  label="Nome"
                  placeholder="Nome"
                  mask="999.999.999-99"
                  className="form-control"
                  value={formik.values.name}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                />
              </Col>
            </Row>
            <Row>
              <Col lg="12" md="12" sm="12">
                <Input 
                  id="email"
                  name="email"
                  label="E-mail"
                  placeholder="E-mail"
                  className="form-control"
                  value={formik.values.email}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                />
              </Col>
            </Row>
            <Row>
              <Col lg="12" md="12" sm="12">
                <Input 
                  id="phone"
                  name="phone"
                  label="Telefone"
                  placeholder="Telefone"
                  className="form-control"
                  value={formik.values.phone}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                />
              </Col>
            </Row>
            <Row>
              <Col lg="12" md="12" sm="12">
                <Input 
                  id="message"
                  name="message"
                  label="Mensagem"
                  placeholder="Mensagem"
                  className="form-control"
                  value={formik.values.message}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                />
              </Col>
            </Row>
            <Row className="mt-3">
              <Col lg="12" md="12" sm="12">
                <Button type="submit" text="Enviar formulário"/>
              </Col>
            </Row>
          </Form>
        </Container>
      </Fade>
    </section>
  )
}