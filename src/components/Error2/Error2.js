import React from 'react'
import PropTypes from 'prop-types'
import StyledError from './Error.styled'

const Error = ({ children, isCenter }) => (
  <StyledError isCenter={isCenter}>
    {children ? <p>{children}</p> : null}
  </StyledError>
)

Error.propTypes = {
  children: PropTypes.node,
  isCenter: PropTypes.bool
}

export default Error
