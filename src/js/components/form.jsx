import React from 'react';
import { validateField, validateForm } from '../validation/validator';
import { TestFormSchema } from '../validation/schemas';
import { ValidatedField } from './';

export default class Form extends React.Component {

    static propTypes = {};

    constructor(props) {
        super(props);
        this.state = {
            errors: {},
            fields: this._constructFieldsFromSchema(TestFormSchema)
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
    }

    _constructFieldsFromSchema(schema) {
        const fields = {};
        const keys = Object.keys(schema);

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
        errors[name] = validateField(TestFormSchema[name], value);
        this.setState({ errors });
    }

    _setFieldState(name, state) {
        const { fields } = this.state;
        fields[name] = { ...fields[name], ...state };
        this.setState({ fields });
    }

    handleSubmit(event) {
        event.preventDefault();
        const { errors, valid } = validateForm(TestFormSchema, this.state.fields);
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
        const { fields, errors, valid } = this.state;
        const { name, random } = fields;

        return (
            <form onSubmit={this.handleSubmit}>
                {valid === false && <h2>INVALID</h2>}

                <div>
                    <label htmlFor="name">Name</label>
                    <ValidatedField
                        type="text" 
                        id="name" 
                        name="name" 
                        {...name}
                        onChange={this.handleChange}
                        onBlur={this.handleBlur} 
                    />
                    {errors.name}
                </div>

                <div>
                    <label htmlFor="random">Random</label>
                    <ValidatedField
                        type="text" 
                        id="random" 
                        name="random" 
                        {...random}
                        onChange={this.handleChange}
                        onBlur={this.handleBlur}
                    />
                    {errors.random}
                </div>

                <input type="submit" value="Submit" />
            </form>
        );
    }
}
