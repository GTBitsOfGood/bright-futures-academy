import React, { Component } from 'react';
import Announcement from './Announcement'
import './css/Announcements.css'

class Announcements extends Component {

    constructor(props) {
      super(props);
      
      this.state = {
          announcements : this.props.announcements
      }
    }

    render() {
        return(
            <div>
                <br></br>
                
                <ul id="Announcements">
                <h2>Announcements</h2>
                    <Announcement announcement="Some stuff"/>
                    <Announcement announcement="Some stuff"/>
                    <Announcement announcement="Some stuff"/>
                    <Announcement announcement="Some stuff"/>
                    <Announcement announcement="Some stuff"/>
                    <Announcement announcement="Some stuff"/>
                    <Announcement announcement="Some stuff"/>
                    <Announcement announcement="Some stuff"/>
                    <Announcement announcement="Some stuff"/>
                    <Announcement announcement="Some stuff"/>
                    <Announcement announcement="Some stuff"/>
                    <Announcement announcement="Some stuff"/>
                    <Announcement announcement="Some stuff"/>
                    <Announcement announcement="Some stuff"/>
                    <Announcement announcement="Some stuff"/>
                    <Announcement announcement="Some stuff"/>
                </ul>
            </div>
        )
    }
}

export default Announcements;