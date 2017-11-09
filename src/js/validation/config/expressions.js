export default {
    alpha: '^[a-zA-Z]+$',
    numeric: '^[0-9]+$',
    alphanumeric: '^[a-zA-Z0-9]+$',
    alphanumericWithSpaces: '^[a-zA-Z0-9 ]*$',
    email: '^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4})*$',
    phone_US: '^((([0-9]{1})*[- .(]*([0-9]{3})[- .)]*[0-9]{3}[- .]*[0-9]{4})+)*$',
    zipcode_US: '^([0-9]{5}(?:-[0-9]{4})?)*$'
};
