import React from 'react';
import { TestFormSchema } from '../validation/schemas';
import { ValidatedForm } from '../validation';
import { ValidatedInput, ValidatedTextArea, ValidatedSelect } from './fields.jsx';


class Form extends React.Component {

    static propTypes = {};

    constructor(props) {
        super(props);
    }

    render() {
        const { fields, errors, valid, handleSubmit } = this.props;
        const { name, gender, comments } = fields;

        return (
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name</label>
                    <ValidatedInput type="text" id="name" {...name} />
                    <p>{name.errors}</p>
                </div>
                <div>
                    <label htmlFor="gender">Gender</label>
                    <ValidatedSelect id="gender" options={['Male', 'Female']} {...gender} />
                    <p>{gender.errors}</p>
                </div>
                <div>
                    <label htmlFor="comments">Comments</label>
                    <ValidatedTextArea id="comments" {...comments} />
                    <p>{comments.errors}</p>
                </div>

                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default ValidatedForm(Form, TestFormSchema);
