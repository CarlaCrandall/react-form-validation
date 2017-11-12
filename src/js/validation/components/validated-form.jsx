import React from 'react';
import { validateField, validateForm } from '../validator';


export default (WrappedForm, Schema) => {
    return class ValidatedFormWrapper extends React.Component {
        constructor(props) {
            super(props)
            this.state = {
                fields: this._constructFieldsFromSchema()
            };
            
            this.handleSubmit = this.handleSubmit.bind(this);
        }

        _constructFieldsFromSchema() {
            const fields = {};
            const keys = Object.keys(Schema);

            keys.forEach((key) => {
                if (key !== '__default') {
                    fields[key] = {
                        name: key,
                        value: '',
                        errors: [],
                        valid: null,
                        pristine: true,
                        touched: false,
                        handleMount: (name, state) => this.handleMount(name, state),
                        handleChange: (name, value) => this.handleChange(name, value),
                        handleBlur: (name, value) => this.handleBlur(name, value)
                    };
                }
            });

            return fields;
        }

        _setFieldState(name, state) {
            const { fields } = this.state;
            fields[name] = { ...fields[name], ...state };
            this.setState({ fields });
        }

        handleMount(name, state) {
            this._setFieldState(name, state);
        }

        handleSubmit(event) {
            event.preventDefault();

            const { fields } = this.state;
            const { errors, valid } = validateForm(Schema, fields);

            Object.keys(errors).forEach((fieldName) => {
                fields[fieldName].errors = errors[fieldName];
            });

            this.setState({ fields, valid });
        }

        handleChange(name, value) {
            this._setFieldState(name, {
                value,
                pristine: false
            })
        }

        handleBlur(name, value) {
            const errors = validateField(Schema[name], value);

            this._setFieldState(name, {
                errors,
                touched: true
            });
        }

        render() {
            const props = {
                ...this.props,
                ...this.state,
                handleMount: this.handleMount,
                handleSubmit: this.handleSubmit
            };

            return <WrappedForm {...props} /> 
        }
  }
}
