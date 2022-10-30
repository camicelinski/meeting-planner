import React from 'react';

import TextField from './TextField';
import Button from './Button'
import formFields from '../data/formFieldsData'

class CalendarForm extends React.Component {
    state = {
        firstName: '',
        lastName: '',
        email: '',
        date: '',
        time: '',
        errors: []
    }

    render() {
        return (
            <form 
                onSubmit={ this.handleSubmit }
                autoComplete='off'
                noValidate
            >                
                <div>
                    {this.renderFields()}
                    <Button type="submit">
                        zapisz
                    </Button>
                </div>
            </form>                
        )
    }

    renderFields = () => formFields.map(field => {
        return (
          <TextField
          key={field.name}
          id={field.name}
          name={field.name}
          label={field.label}
          placeholder={field.placeholder}
          type={field.type}
          value={this.state[field.name]}
          onChange={this.inputChange}
          errors={this.state.errors}
          err={field.err}            
          required={field.required}   
          />
        )
    })

    handleSubmit = e => {
        e.preventDefault();

        const isFormValidated = this.validateForm()
        if (isFormValidated) {
            this.saveMeeting();
            this.clearFormFields();
        }
    }

    validateForm() {
        this.setState({ errors: [] }) 
        const errors = []

        formFields.forEach(field => {
            const { name, required, regExp, err } = field
            const value = this.state[name]
      
            if(required) {
                if(value.length === 0) {
                    errors.push({
                    text: 'this field is mandatory',
                    field: field
                    })
                }      
            } 
            
            if(regExp && value.length > 0) {
                const reg = new RegExp(regExp)
                if(!reg.test(value)) {
                    errors.push({
                    text: err,
                    field: field
                    })
                }
            }
        })

        if (errors.length === 0) {
            return true
        } else {
            this.setState({ errors: errors })
      
            return false
        }
    }
    
    inputChange = e => {
        if(this.isFieldNameCorrect(e.target.name)) {
            this.setState({
                [e.target.name]: e.target.value,
            });
        }
    }

    saveMeeting() {
        const {saveMeeting} = this.props;
        const l = this.getFieldsData()
        console.log(l)

        if(typeof saveMeeting === 'function') {
            saveMeeting(this.getFieldsData());
        }
    }

    clearFormFields() {
        const fieldsData = this.getFieldsData();
        for(const prop in fieldsData) {
            fieldsData[prop] = '';
        }

        this.setState(fieldsData);
    }

    getFieldsData() {
        const fieldsData = Object.assign({}, this.state);
        delete fieldsData['errors'];
        
        return fieldsData;
    }

    isFieldNameCorrect(name) {
        const fieldsData = this.getFieldsData();

        return typeof fieldsData[name] !== 'undefined';
    }
}

export default CalendarForm
