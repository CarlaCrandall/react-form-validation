import React from 'react';
import { validateField, validateForm } from '../validation/validator';


export default (WrappedComponent, Schema) => {
    return class ValidatedFormWrapper extends React.Component {
        constructor(props) {
            super(props)
            this.state = {
                errors: {},
                fields: this._constructFieldsFromSchema()
            };

            this.handleSubmit = this.handleSubmit.bind(this);
            this.handleChange = this.handleChange.bind(this);
            this.handleBlur = this.handleBlur.bind(this);
        }

        _constructFieldsFromSchema() {
            const fields = {};
            const keys = Object.keys(Schema);

            keys.forEach((key) => {
                if (key !== '__default') {
                    fields[key] = {
                        value: '',
                        valid: null,
                        pristine: true,
                        touched: false
                    };
                }
            });

            return fields;
        }

        _setFieldValue(name, value) {
            const { fields } = this.state;
            fields[name].value = value;
            this.setState({ fields });
        }

        _setFieldErrors(name, value) {
            const { errors } = this.state;
            errors[name] = validateField(Schema[name], value);
            this.setState({ errors });
        }

        _setFieldState(name, state) {
            const { fields } = this.state;
            fields[name] = { ...fields[name], ...state };
            this.setState({ fields });
        }

        handleSubmit(event) {
            event.preventDefault();
            const { errors, valid } = validateForm(Schema, this.state.fields);
            this.setState({ errors, valid });
        }

        handleChange(name, value) {
            this._setFieldValue(name, value);
            this._setFieldState(name, { pristine: false })
        }

        handleBlur(name, value) {
            this._setFieldErrors(name, value);
            this._setFieldState(name, { touched: true });
        }

        render() {
            const props = {
                ...this.props,
                ...this.state,
                handleChange: this.handleChange,
                handleBlur: this.handleBlur,
                handleSubmit: this.handleSubmit
            };

            return <WrappedComponent {...props}/> 
        }
  }
}
