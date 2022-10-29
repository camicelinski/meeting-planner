import React from 'react'
import PropTypes from 'prop-types'

export const Button = (props) => {
  const {
    className, 
    ...otherProps
  } = props

  return (
    <button
      className={`${className}`}
      {...otherProps}
    >
    </button>
  )
}

Button.propTypes = {
  className: PropTypes.string
}

export default Button