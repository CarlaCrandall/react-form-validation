import React from 'react';
import { validateField, validateForm } from '../validation/validator';
import { TestFormSchema } from '../validation/schemas';

export default class Form extends React.Component {

    static propTypes = {};

    constructor(props) {
        super(props);
        this.state = {
            errors: {},
            form: {
                name: '',
                random: ''
            }
        };
    }

    validateField(name, value) {
        
    }

    onSubmit(event) {
        event.preventDefault();
        const { errors, isValid } = validateForm(TestFormSchema, this.state.form);
        this.setState({ errors, isValid });
    }

    onChange(event) {
        const { name, value } = event.target;
        const { form } = this.state;
        form[name] = value;
        this.setState({ form });
    }

    onBlur(event) {
        const { name, value } = event.target;
        const { errors } = this.state;
        errors[name] = validateField(TestFormSchema[name], value);
        this.setState({ errors });
    }

    render() {
        const { form, errors, isValid } = this.state;

        return (
            <form onSubmit={event => this.onSubmit(event)}>
                {isValid === false && <h2>INVALID</h2>}
                <div>
                    <label htmlFor="name">Name</label>
                    <input 
                        id="name" 
                        name="name" 
                        type="text" 
                        value={form.name} 
                        onChange={event => this.onChange(event)}
                        onBlur={event => this.onBlur(event)} 
                    />
                    {errors.name}
                </div>

                <div>
                    <label htmlFor="random">Random</label>
                    <input 
                        id="random" 
                        name="random" 
                        type="text" 
                        value={form.random} 
                        onChange={event => this.onChange(event)}
                        onBlur={event => this.onBlur(event)} 
                    />
                    {errors.random}
                </div>

                <input type="submit" value="Submit" />
            </form>
        );
    }
}
