import React, { Component } from 'react';
import './css/Directions.css';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/**
 * Directions component for contact page.
 */
class Directions extends Component {

    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return (
          <div className="directionsContainer">
            <p className="contactUsHeaderText"> Get directions </p>
            <div className="allLocationsContainer">
              <div className="singleLocationContainer">
                <div className="directionsTitleContainer">
                  <div className="locationTitleText">
                    BF Academy
                  </div>
                  <FontAwesomeIcon icon={ faMapMarkerAlt } className="mapMarkerIcon"/>
                </div>
                <div className="locationAddressText">1300 Joseph E. Boone Blvd</div>
                <div className="locationAddressText">Atlanta, GA 30314</div>
              </div>
              <div className="singleLocationContainer">
                <div className="directionsTitleContainer">
                  <div className="locationTitleText">
                    BF House
                  </div>
                  <FontAwesomeIcon icon={ faMapMarkerAlt } className="mapMarkerIcon"/>
                </div>
                <div className="locationAddressText">64 Edwin Place NW</div>
                <div className="locationAddressText">Atlanta, GA 30318</div>
              </div>
              <div className="singleLocationContainer">
                <div className="directionsTitleContainer">
                  <div className="locationTitleText">
                    BF Youth Center
                  </div>
                  <FontAwesomeIcon icon={ faMapMarkerAlt } className="mapMarkerIcon"/>
                </div>
                <div className="locationAddressText">744 Gary Rd</div>
                <div className="locationAddressText">Atlanta, GA 30318</div>
              </div>            
            </div>
          </div>

        );
    }
}

export default Directions;