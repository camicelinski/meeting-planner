import React from 'react'

import StyledError from './Error.styled'

export const Error = (props) => {
  const {
    className,
    text, 
    ...otherProps
  } = props

  return(
    <StyledError>
      <p>{text}</p>
    </StyledError>
  )
}

export default Error