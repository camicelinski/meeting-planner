import React from 'react'
import PropTypes from 'prop-types'

import StyledError from './Error.styled'

export const Error = (props) => {
  const {
    className,
    text, 
    ...otherProps
  } = props

  return(
    <StyledError /*isCenter={isCenter}*/>
      <p>{text}</p>
    </StyledError>
  )

  /*return (
    <StyledError
      className='error'
      {...otherProps}
    >
      {text}
    </StyledError>
  )*/
}

Error.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string
}

export default Error