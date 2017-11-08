export const hasValue = (value) => {

    if (Array.isArray(value)) {
        return value.length > 0;
    }
    else if (typeof value === 'object') {
        return Object.keys(value).length > 0;
    }
    else if (value) {
        return true;
    }

    return false;
};

export const isFunction = (functionToCheck) => {
    return functionToCheck && {}.toString.call(functionToCheck) === '[object Function]';
};
