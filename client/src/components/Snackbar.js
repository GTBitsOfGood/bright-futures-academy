import React, { Component } from 'react';
import './css/Snackbar.css';

/**
 * Snackbar is a little pop up that shows up and can be used for notifications on the page
 */
class SnackBar extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="snackbar" className={this.props.show.toString()}>{this.props.message}</div>
        );
    }
}

export default SnackBar;