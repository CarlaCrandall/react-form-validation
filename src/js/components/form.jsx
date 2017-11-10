import React from 'react';
import { TestFormSchema } from '../validation/schemas';
import { ValidatedField, ValidatedForm } from '../validation';


class Form extends React.Component {

    static propTypes = {};

    constructor(props) {
        super(props);
    }

    render() {
        const { fields, errors, valid, handleSubmit } = this.props;
        const { name, random } = fields;

        return (
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name</label>
                    <ValidatedField
                        type="text"
                        id="name"
                        {...name}
                    />
                    {name.errors}
                </div>

                <div>
                    <label htmlFor="random">Random</label>
                    <ValidatedField
                        type="text"
                        id="random"
                        {...random}
                    />
                    {random.errors}
                </div>

                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default ValidatedForm(Form, TestFormSchema);
