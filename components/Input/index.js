// Libraries
import React from 'react'
import InputMask from 'react-input-mask'
import { InputGroup } from 'react-bootstrap'

// Icons
import * as AllIcons from 'react-icons/all'
import { IconType } from 'react-icons/lib/esm'

// Components
const BaseInput = ({
  addonLeft,
  addonRight,
  value,
  type,
  disabled,
  label,
  mask,
  name,
  mandatory,
  onAddonLeftClick,
  onAddonRightClick,
  onBlur,
  onChange,
  onKeyDown,
  placeholder,
  invalid,
  errorMsg
}) => {

  // Addons
  const AddonLeftIcon = addonLeft ? (AllIcons)[addonLeft] : null
  const AddonRightIcon = addonRight ? (AllIcons)[addonRight] : null
  
  // JSX
  return (
    <>
    
      <InputGroup>
        <Input
          className="text-uppercase"
          type={type}
          value={value}
          name={name}
          invalid={invalid || false}
          placeholder={placeholder || ''}
          disabled={disabled || false}
          onBlur={onBlur?.bind(BaseInput)}
          onChange={onChange?.bind(BaseInput)}
          onKeyDown={onKeyDown?.bind(BaseInput)}
          tag={InputMask}
          mask={mask || null}
        />
        {invalid && (
          <p>{errorMsg ? errorMsg : ''}</p>
        )}
      </InputGroup>
    </>
  )
}

// Export component
export default BaseInput