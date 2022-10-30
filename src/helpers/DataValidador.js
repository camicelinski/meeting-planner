export default class DataValidator {
  constructor() {
    this.timezoneOffset = new Date().getTimezoneOffset() * 60000
  }

  date = {
    regExp: /^20\d{2}[-/.](0[1-9]|1[0-2])[-/.](0[1-9]|[12]\d|3[01])$/,
    err: 'please schedule your meeting today or in the future',
    required: true,
  }

  time = {
    regExp: /^((0[8-9]|1[0-9]):[0-5][0-9])$|^(20:00)$/,
    err: 'please schedule your meeting during working hours 08:00 - 20:00',
    required: true,
  }

  firstName = {
    regExp: /^[a-zA-Z]{3,}(?:(-| )[a-zA-Z]+){0,2}$/,
    err: 'this field requires at least 3 letters',
    required: true
  }

  lastName = {
    regExp: /^[a-zA-Z]{3,}(?:(-| )[a-zA-Z]+){0,2}$/,
    err: 'this field requires at least 3 letters',
    required: true
  }

  email = {
    regExp: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
    err: 'please enter a valid e-mail address',
    required: true
  }

  checkDataErrors (inputName, inputValue) {
    if (!this[inputName]) {
      return null
    }

    return !(!this[inputName].required && inputValue.trim().length === 0) ? this.isDataValid(inputName, inputValue) : null
  }

  isDataValid (inputName, inputValue) {
    const isDataValid = this.isMatchRegex(inputName, inputValue.trim())    
    const isDateCorrect = this.checkIsDate(inputName, inputValue)
    return !isDataValid || !isDateCorrect ? this.createErrObject(inputName) : null
  }

  isMatchRegex (inputName, inputValue) {
    return this[inputName].regExp.test(inputValue)
  }

  checkIsDate(inputName, inputValue) {
    return inputName === 'date' ? this.isFutureDate(inputValue) : true
  }

  isFutureDate(inputValue) {
    const currentDate = this.getCurrentDate()
    return new Date(inputValue) >= new Date(currentDate)
  }

  getCurrentDate() {
    return new Date(Date.now() - this.timezoneOffset).toISOString().slice(0, 10)
  }

  createErrObject (inputName) {
    return {
      [inputName]: this[inputName].err
    }
  }
}
