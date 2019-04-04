import React, { Component } from 'react';
import './css/Snackbar.css';

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