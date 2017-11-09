import React from 'react';
import { isFunction } from '../utils';

export default class ValidatedField extends React.Component {

    static propTypes = {};

    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
    }

    handleChange(event) {
        const { onChange } = this.props;
        const { name, value } = event.target;
        isFunction(onChange) && onChange(name, value);
    }

    handleBlur(event) {
        const { onBlur } = this.props;
        const { name, value } = event.target;
        isFunction(onBlur) && onBlur(name, value);
    }

    render() {
        const { type, name, value, errors, valid, pristine, touched, onChange, onBlur, ...otherProps } = this.props;

        return (
            <input 
                type={type} 
                name={name} 
                value={value}
                {...otherProps}
                onChange={this.handleChange}
                onBlur={this.handleBlur} 
            />
        );
    }
}
