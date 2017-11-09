import { EXPRESSIONS } from './config';

export const required = value => value ? true : false;

export const minLength = (len, value) => {
    if (value) return value.length >= len;
    return true;
};

export const maxLength = (len, value) => {
    if (value) return value.length <= len;
    return true;
};

export const regex = (expression, value) => {
    const exp = new RegExp(EXPRESSIONS[expression]);
    return exp.test(value);
};
