import React, { Component } from 'react';
import { Announcement } from './'
import './css/Announcements.css'
/**
 * Container class for Announcents for the parent portal page.
 * It returns multiple Annoucnemnt components
 */
class AnnouncementList extends Component {

    constructor(props) {
      super(props);
      this.state = {
        announcements : this.props.announcements,
          id: this.props.id
      }
    }

    //TODO: Add KEY FOR ANNOUNCEMENT
    render() {
        return(
            <div>
                <br></br>

                <ul id="Announcements">
                <h2>Announcements</h2>
                    {
                        this.state.announcements.map(function(d, id) {
                            return <Announcement announcement={d}/>
                        })
                    }

                </ul>
            </div>
        )
    }
}

export default AnnouncementList;
