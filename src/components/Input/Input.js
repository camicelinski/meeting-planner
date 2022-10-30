import React, { useContext } from 'react'
import formContext from '../../context/formContext'
import PropTypes from 'prop-types'
import StyledInput from './Input.styled'
import Error from '../Error'

const Input = (props) => {
  //const formHandler = useContext(formContext)

  const {
    field: { name, label, type }
  } = props

  const renderField = () => (
    <>
      <input
        type={type}
        name={name}
        id={name}
        onChange={formHandler.handleChange}
        onBlur={formHandler.validateFieldOnBlur}
        value={formHandler.formState[name].value}
        autoComplete={'off'}
        required
      />
      <label htmlFor={name}>{label}</label>
    </>
  )

  return (
    <>
      <input>
        {renderField()}
      </input>
      <Error>
        {formHandler.errors[name]}
      </Error>
    </>
  )
}

Input.propTypes = {
  field: PropTypes.object
}

export default Input
