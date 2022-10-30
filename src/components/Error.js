import React from 'react'
import PropTypes from 'prop-types'

export const Error = (props) => {
  const {
    className,
    text, 
    ...otherProps
  } = props

  return (
    <p
      className='error'
      {...otherProps}
    >
      {text}
    </p>
  )
}

Error.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string
}

export default Error