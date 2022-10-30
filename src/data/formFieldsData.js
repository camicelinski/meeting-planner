const formFields = [
  {
    name: 'date',
    label: 'Data: ',
    type: 'text',
    placeholder: 'RRRR-MM-DD',
    regExp: /^20\d{2}[-/.](0[1-9]|1[0-2])[-/.](0[1-9]|[12]\d|3[01])$/,
    err: 'please schedule your meeting today or in the future',
    required: true,
  },
  {
    name: 'time',
    label: 'Godzina: ',
    type: 'text',
    placeholder: 'HH:MM',
    regExp: /^((0[8-9]|1[0-9]):[0-5][0-9])$|^(20:00)$/,
    err: 'please schedule your meeting during working hours 08:00 - 20:00',
    required: true,
  },
  {
    name: 'firstName',
    label: 'Imię: ',
    type: 'text',
    regExp: /^[a-zA-Z]{3,}(?:(-| )[a-zA-Z]+){0,2}$/,
    err: 'this field requires at least 3 letters',
    required: true
  },
  {
    name: 'lastName',
    label: 'Nazwisko: ',
    type: 'text',
    regExp: /^[a-zA-Z]{3,}(?:(-| )[a-zA-Z]+){0,2}$/,
    err: 'this field requires at least 3 letters',
    required: true
  },
  {
    name: 'email',
    label: 'Email: ',
    type: 'text',
    placeholder: 'nazwa@poczty.pl',
    regExp: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
    err: 'please enter a valid e-mail address',
    required: true
  }
]

export default formFields