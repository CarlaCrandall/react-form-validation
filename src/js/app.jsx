import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default class App extends React.Component {

    static propTypes = {};

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <h1>Hello World</h1>
            </div>
        );
    }
}
