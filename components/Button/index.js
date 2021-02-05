// Libs
import React from 'react'

// Components
import { Button as BootstrapButton } from 'react-bootstrap'

// Component
export const Button = ({ 
  text, 
  type = 'button', 
  variant = 'primary',
  onClick = () => {}
}) => {

  // JSX
  return (
    <BootstrapButton
      className="base-button"
      onClick={onClick}
      variant={variant}
      type={type}
    >
      {text}
    </BootstrapButton>
  )
}