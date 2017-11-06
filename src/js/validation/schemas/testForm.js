import * as Rules from '../rules';
import ERROR_MESSAGES from '../messages';

export default {
    __default: [{
        rule: Rules.minLength.bind(null, 3),
        message: ERROR_MESSAGES.minLength.replace('{{LENGTH}}', 3)
    }],
    name: [{
        rule: Rules.minLength.bind(null, 3),
        message: ERROR_MESSAGES.minLength.replace('{{LENGTH}}', 3)
    }, {
        rule: Rules.maxLength.bind(null, 5),
        message: ERROR_MESSAGES.maxLength.replace('{{LENGTH}}', 5)
    }],
    random: [{
        rule: Rules.required,
        message: ERROR_MESSAGES.required
    }, {
        rule: Rules.regex.bind(null, 'alpha'),
        message: ERROR_MESSAGES.alpha
    }]
};
