import React from 'react';
import { ValidatedField } from '../validation';


const Input = ({ errors, valid, pristine, touched, ...otherProps }) => <input {...otherProps} />

const TextArea = ({ errors, valid, pristine, touched, ...otherProps }) => <textarea {...otherProps} />

const Select = ({ errors, valid, pristine, touched, options, ...otherProps }) => {
    return (
        <select {...otherProps}>
            <option value="" disabled={true}>Please select a value</option>
            {options.map((opt, index) => <option key={index} value={opt}>{opt}</option>)}
        </select>
    );
};

export const ValidatedInput = ValidatedField(Input);
export const ValidatedTextArea = ValidatedField(TextArea);
export const ValidatedSelect = ValidatedField(Select);
