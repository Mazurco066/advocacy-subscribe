// Libraries
import React from 'react'
import InputMask from 'react-input-mask'
import { InputGroup } from 'react-bootstrap'

// Components
export const Input = ({
  id,
  value,
  type = 'text',
  disabled,
  label,
  mask,
  name,
  onBlur = () => {},
  onChange = () => {},
  onKeyDown = () => {},
  placeholder
}) => {
  
  // JSX
  return (
    <>
      {label && (
        <label className="base-input-label">
          {label}
        </label>
      )}
      <InputGroup className="base-input">
        <InputMask
          id={id}
          className="text-uppercase form-control"
          type={type}
          value={value}
          name={name}
          placeholder={placeholder || ''}
          disabled={disabled || false}
          onBlur={onBlur}
          onChange={onChange}
          onKeyDown={onKeyDown}
          mask={mask || null}
        />
      </InputGroup>
    </>
  )
}