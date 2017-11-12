import React from 'react';
import { TestFormSchema } from '../validation/schemas';
import { ValidatedForm } from '../validation';
import { ValidatedInput, ValidatedTextArea, ValidatedSelect, ValidatedCheckbox } from './fields.jsx';


class Form extends React.Component {

    static propTypes = {};

    constructor(props) {
        super(props);
    }

    render() {
        const { fields, valid, handleSubmit } = this.props;
        const { comments, country, name, signup } = fields;

        return (
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name</label>
                    <ValidatedInput type="text" id="name" defaultValue="text" {...name} />
                    <p>{name.errors}</p>
                </div>
                <div>
                    <label htmlFor="country">Country</label>
                    <ValidatedSelect id="country" options={['USA', 'Canada']} {...country} />
                    <p>{country.errors}</p>
                </div>
                <div>
                    <label htmlFor="comments">Comments</label>
                    <ValidatedTextArea id="comments" {...comments} />
                    <p>{comments.errors}</p>
                </div>
                <div>
                    <label htmlFor="signup">Signup for Email</label>
                    <ValidatedInput type="checkbox" id="signup" defaultChecked={false} {...signup} />
                    <p>{signup.errors}</p>
                </div>

                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default ValidatedForm(Form, TestFormSchema);
