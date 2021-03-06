import { hasValue } from './utils';

const createValidator = ({ rule, message }) => (value) => {
    const isValid = rule(value);
    return isValid ? null : message;
};

export const validateField = (validations, value) => {
    const validators = validations.map(validation => createValidator(validation));
    const errors = validators.map(validator => validator(value)).filter(result => result !== null);
    return errors;
};

export const validateForm = (schema, fields) => {
    const fieldNames = Object.keys(schema);
    const errors = {};
    let valid = true;

    fieldNames.forEach((name) => {
        const fieldErrors = validateField(schema[name], fields[name].value);

        if (hasValue(fieldErrors)) {
            errors[name] = fieldErrors;
            valid = false;
        }
    });

    return { errors, valid };
};

