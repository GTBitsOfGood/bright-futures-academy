import React, {Component} from 'react';
/**
 * Container class for A single announcment
 */
class Announcement extends Component {
    constructor(props) {
    super(props);
    this.state = {
        announcement: this.props.announcement,
        id: this.props.key
    }
    }

    //TODO: Add key for announcement
    render() {
        return (
            <li>
                {this.state.announcement}
            </li>
        )
    }
}

export default Announcement;