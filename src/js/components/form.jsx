import React from 'react';
import { TestFormSchema } from '../validation/schemas';
import { ValidatedField } from './';
import ValidatedForm from './validated-form.jsx';


class Form extends React.Component {

    static propTypes = {};

    constructor(props) {
        super(props);
    }

    render() {
        const { fields, errors, valid, handleChange, handleBlur, handleSubmit } = this.props;
        const { name, random } = fields;

        return (
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name</label>
                    <ValidatedField
                        type="text"
                        id="name"
                        name="name"
                        {...name}
                        onChange={handleChange}
                        onBlur={handleBlur}
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
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    {errors.random}
                </div>

                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default ValidatedForm(Form, TestFormSchema);
