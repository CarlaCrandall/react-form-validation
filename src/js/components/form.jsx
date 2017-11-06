import React from 'react';
import { validateForm } from '../validation/validator';
import { TestFormSchema } from '../validation/schemas';

export default class Form extends React.Component {

    static propTypes = {};

    constructor(props) {
        super(props);
        this.state = {
            errors: {},
            form: {}
        };
    }

    onSubmit(event) {
        event.preventDefault();
        const { errors, isValid } = validateForm(TestFormSchema, this.state.form);
        this.setState({ errors, isValid });
    }

    render() {
        const { form, errors, isValid } = this.state;

        return (
            <form onSubmit={event => this.onSubmit(event)}>
                {isValid === false && <h2>INVALID</h2>}
                <div>
                    <label htmlFor="name">Name</label>
                    <input id="name" type="text" value={form.name} />
                    {errors.name}
                </div>

                <div>
                    <label htmlFor="random">Random</label>
                    <input id="random" type="text" value={form.random} />
                    {errors.random}
                </div>

                <input type="submit" value="Submit" />
            </form>
        );
    }
}
