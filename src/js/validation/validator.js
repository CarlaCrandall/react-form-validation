import { hasValue } from '../utils';

const createValidator = ({ rule, message }) => (value) => {
    const isValid = rule(value);
    return isValid ? null : message;
};

export const validateField = (validations, value) => {
    const validators = validations.map(validation => createValidator(validation));
    const errors = validators.map(validator => validator(value)).filter(result => result !== null);
    return errors;
};

export const validateForm = (schema, form) => {
    const fields = Object.keys(schema);
    const errors = {};
    let isValid = true;

    fields.forEach((name) => {
        const fieldErrors = validateField(schema[name], form[name]);

        if (hasValue(fieldErrors)) {
            errors[name] = fieldErrors;
            isValid = false;
        }
    });

    return { errors, isValid };
};

