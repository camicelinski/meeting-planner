import React from 'react'
import PropTypes from 'prop-types'

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

Button.propTypes = {
  className: PropTypes.string
}

export default Button