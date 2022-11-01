import React from 'react'
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

export default Switcher
