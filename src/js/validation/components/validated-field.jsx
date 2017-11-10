import React from 'react';
import { isFunction } from '../utils';


export default (WrappedField) => {
    return class ValidatedField extends React.Component {

        static propTypes = {};

        constructor(props) {
            super(props);

            this.handleChange = this.handleChange.bind(this);
            this.handleBlur = this.handleBlur.bind(this);
        }

        handleChange(event) {
            const { handleChange } = this.props;
            const { name, value } = event.target;
            isFunction(handleChange) && handleChange(name, value);
        }

        handleBlur(event) {
            const { handleBlur } = this.props;
            const { name, value } = event.target;
            isFunction(handleBlur) && handleBlur(name, value);
        }

        render() {
            const { handleChange, handleBlur, ...passThroughProps } = this.props;
            const props = {
                ...passThroughProps,
                onChange: this.handleChange,
                onBlur: this.handleBlur
            };

            return <WrappedField {...props} /> 
        }
    }
}
