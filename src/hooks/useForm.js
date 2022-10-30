import { useReducer, useState } from 'react'
import FORM_ACTIONS from '../helpers/actions'
import {
  createInitStateObj,
  getInputNames,
  convertArrToObj,
  isObjectEmpty
} from '../helpers/helpersFunctions'
import DataValidator from '../helpers/DataValidador'
import formReducer from '../reducers/formReducer'
import formFields from '../data/formFieldsData'

function useForm () {
  const [formState, dispatch] = useReducer(formReducer, createInitStateObj())
  const [errors, setErrors] = useState({})
  const validator = new DataValidator()

  const setFieldValue = (name, value) => {
    dispatch({
      type: FORM_ACTIONS.CHANGE_VALUE,
      payload: { name, value }
    })
  }

  const setFieldCorrectness = (name, actionType) => {
    dispatch({
      type: actionType,
      payload: { name }
    })
  }

  const createFieldError = (errorsArr, name, err) => {
    errorsArr.push(err)
    setFieldCorrectness(name, FORM_ACTIONS.SET_INVALID)
  }

  const createStepErrors = (errorsArr, fieldsNamesList) => {
    fieldsNamesList.forEach((name) => {
      const err = validator.checkDataErrors(name, formState[name].value)
      return err ? createFieldError(errorsArr, name, err) : setFieldCorrectness(name, FORM_ACTIONS.SET_VALID)
    })
  }

  const findStepErrors = (fieldsNamesList) => {
    const errorsArr = []
    createStepErrors(errorsArr, fieldsNamesList)
    const errorsObj = convertArrToObj(errorsArr)
    return errorsObj
  }

  const addFieldError = (fieldErr, name) => {
    setErrors({ ...errors, ...fieldErr })
    setFieldCorrectness(name, FORM_ACTIONS.SET_INVALID)
  }

  const removeFieldError = (name) => {
    const { [name]: tempValue, ...rest } = errors
    setErrors(rest)
    setFieldCorrectness(name, FORM_ACTIONS.SET_VALID)
  }

  const handleChange = e => {
    const { name, value } = e.target
    setFieldValue(name, value)
  }

  const validateFieldOnBlur = e => {
    const { name, value } = e.target
    const err = validator.checkDataErrors(name, value)
    return err ? addFieldError(err, name) : removeFieldError(name)
  }

  const validateStepData = (step) => {
    const stepFields = stepsData[step]
    const fieldsNamesList = getInputNames(stepFields)
    const errorsObj = findStepErrors(fieldsNamesList)
    const isDataValid = isObjectEmpty(errorsObj)
    if (!isDataValid) {
      setErrors({ ...errors, ...errorsObj })
    }
    return isDataValid
  }

  return {
    formState,
    errors,
    handleChange,
    handleDropdownChange,
    handleCheckboxChange,
    validateFieldOnBlur,
    validateStepData,
    removeFieldError
  }
}

export default useForm
