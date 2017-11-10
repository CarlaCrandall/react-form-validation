import * as Rules from '../rules';
import { MESSAGES } from '../config';

export default {
    // __default: [{
    //     rule: Rules.minLength.bind(null, 3),
    //     message: ERROR_MESSAGES.minLength.replace('{{LENGTH}}', 3)
    // }],
    name: [{
        rule: Rules.minLength.bind(null, 3),
        message: MESSAGES.minLength.replace('{{LENGTH}}', 3)
    }, {
        rule: Rules.maxLength.bind(null, 5),
        message: MESSAGES.maxLength.replace('{{LENGTH}}', 5)
    }],
    gender: [{
        rule: Rules.required,
        message: MESSAGES.required
    }],
    comments: [{
        rule: Rules.required,
        message: MESSAGES.required
    }, {
        rule: Rules.regex.bind(null, 'alpha'),
        message: MESSAGES.alpha
    }]
};
