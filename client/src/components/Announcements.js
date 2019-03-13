import React, { Component } from 'react';
import Announcement from './Announcement'
import './css/Announcements.css'
import {ReactIsInDevelomentMode} from './Utils';

//TODO: Determine the Production url for the api
const API_ANNOUNCEMENTS_DEV = "http://localhost:5000/api/schoolInfo/announcements"
const API_ANNOUNCEMENTS_PROD = "";

/**
 * Container class for Announcents for the parent portal page.
 * It returns multiple Annoucnemnt components
 */
class AnnouncementList extends Component {

    constructor(props) {
      super(props);
      this.state = {
        announcements : [],
          id: this.props.id
      }
      
    }

    /**
     * Makes a GET request to either dev or prod and fetches the announcement list
     * as soon as the component loads and updates the state
     * TODO: Add Validation for output
     * TODO: Once finished, remove debugging statements
     */
    componentDidMount() {
        let urlToFetch = API_ANNOUNCEMENTS_PROD;
        if (ReactIsInDevelomentMode()) {
            urlToFetch = API_ANNOUNCEMENTS_DEV;
        }
        fetch(urlToFetch)
        .then(response => response.json())
        .then(data =>  this.setState({announcements:this.parseAnnouncements(data)}))
          
    }

    /**
     * TODO: How are multiple announcements stored? in data.annoucnment or just as a string
     * Assuming the object has an attribute announcement for now
     * 
     * Returns formatted data to be stored in the state
     */
    parseAnnouncements(data) {
        if (data.announcements !== undefined) {
            var toBeReturned = []
            for (let i =0; i < data.length(); i++) {
                toBeReturned.push(data[i].announcement)
            }
          return toBeReturned;
          
        } else {
            return [data[0].default]
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