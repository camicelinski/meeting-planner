import React from 'react'
import PropTypes from 'prop-types'
import StyledSwitcher from './Switcher.styled'

const Switcher = ({ name, isOn, handleChange }) => (
  <StyledSwitcher
    isOn={isOn}
    name={name}
  >
    <input
      type={'checkbox'}
      id={name}
      name={name}
      checked={isOn}
      onChange={handleChange}
    />
    <label htmlFor={name}>
      <span />
    </label>
  </StyledSwitcher>
)

Switcher.propTypes = {
  name: PropTypes.string,
  isOn: PropTypes.bool,
  handleChange: PropTypes.func
}

export default Switcher
