import React from 'react'
import PropTypes from 'prop-types'
import Error from './Error.js'

class TextField extends React.Component {
  render() {
    const {
      id,
      label,
      className,
      errors,
      ...otherProps
    } = this.props

    return (
      <div>
        <label
          className='form__label'
          htmlFor={id}
        >
          {label}
        </label>
        <div className='input__container'>
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
        </div>
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
      </div>
    )
  }
}

TextField.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  errors: PropTypes.arrayOf(PropTypes.object),
  className: PropTypes.string
}

export default TextField