import React from 'react'

import StyledButton from './Button.styled'

export const Button = (props) => {
  const {
    className, 
    ...otherProps
  } = props

  return (
    <StyledButton
      className={`${className}`}
      {...otherProps}
    >
    </StyledButton>
  )
}

export default Button