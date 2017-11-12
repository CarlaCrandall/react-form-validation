import React from 'react';
import { isFunction } from '../utils';


export default (WrappedField) => {
    return class ValidatedField extends React.PureComponent {

        static propTypes = {};

        constructor(props) {
            super(props);
        }

        componentWillMount() {
            const { name, type, defaultValue, defaultChecked, handleMount } = this.props;
            let initialValue = defaultValue || '';

            if (type && type === 'checkbox') {
                initialValue = !!defaultChecked;
            }

            isFunction(handleMount) && handleMount(name, { 
                value: initialValue 
            });
        }

        _getFieldValue({ type, value, checked }) {
            if (type && type === 'checkbox') return checked;
            return value;
        }

        handleChange(event) {
            const { name, handleChange } = this.props;
            const value = this._getFieldValue(event.target);
            isFunction(handleChange) && handleChange(name, value);
        }

        handleBlur(event) {
            const { name, handleBlur } = this.props;
            const { target } = event;

            // Blur is fired when checkbox and radio inputs are activated
            // Need to check whether blur is "genuine" before triggering validation
            setTimeout(() => {
                if (document.activeElement === target) return;

                const value = this._getFieldValue(target);
                isFunction(handleBlur) && handleBlur(name, value);
            });
        }

        render() {
            const { handleMount, handleChange, handleBlur, defaultValue, defaultChecked, ...passThroughProps } = this.props;
            const props = {
                ...passThroughProps,
                onChange: (event) => this.handleChange(event),
                onBlur: (event) => this.handleBlur(event)
            };

            return <WrappedField {...props} /> 
        }
    }
}
