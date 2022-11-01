import React from 'react'
import Error from '../Error'

import StyledFormField from './FormField.styled.js'

class FormField extends React.Component {
  render() {
    const {
      id,
      label,
      placeholder,
      className,
      errors,
      ...otherProps
    } = this.props

    return (
      <StyledFormField>
        <input
          id={id}
          className={
            errors.length === 0 ?
              'form__input'
              :
              errors.filter((error) => error.field.name === id).length > 0 ?
                'form__input input--error'
                :
                'form__input'
          }
          {...otherProps}
        >
        </input>
        <label
          className='form__label'
          htmlFor={id}
        >          
          {label}
          <span>{placeholder}</span>          
        </label>
        {
          errors.map((error, index) => {
            return (
              error && error.field.name === id ?
                <Error
                  key={index}
                  text={error.text}
                />
                :
                ''
            )
          })
        }
      </StyledFormField>
    )
  }
}

export default FormField