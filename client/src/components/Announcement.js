import React, {Component} from 'react';

class Announcement extends Component {
    constructor(props) {
        super(props);
    this.state = {
        announcement: this.props.announcement
    }
    }

    render() {
        return (
            <li>
                {this.state.announcement}
            </li>
        )
    }
}

export default Announcement;