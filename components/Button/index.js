// Libs
import React from 'react'

// Components
import { Button as BootstrapButton } from 'react-bootstrap'

// Component
export const Button = ({ text, type = 'button' }) => {

  // JSX
  return (
    <BootstrapButton type={type}>
      {text}
    </BootstrapButton>
  )
}