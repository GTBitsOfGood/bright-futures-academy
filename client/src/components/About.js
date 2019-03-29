import React, { Component } from 'react';
import './css/About.css';
import { logoImage } from './../images'

/**
 * About component for the about us page
 */
class About extends Component {

    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div className="aboutBackground">
                <p className="aboutHeader">
                    - about -
                </p>
                <p className="aboutDescription">
                    Bright Futures Atlanta focuses on helping youth of limited resources on Atlanta’s Westside by providing the spiritual, educational and familial support that helps them become productive members of society and role models to their peers. Bright Futures Atlanta was formed in 2002 in order to promote the spiritual, academic and physical growth of its youth participants and their families through year-round programs.
                </p>
                {/* TODO: get images from backend api call */}
                <table className="aboutTable">
                    <tbody align="center">
                        <tr>
                            <td><img alt="#" src={logoImage} className="rectangleImageAbout"/></td>
                            <td><img alt="#" src={logoImage} className="rectangleImageAbout"/></td>
                            <td><img alt="#" src={logoImage} className="rectangleImageAbout"/></td>
                        </tr>
                    </tbody>
                    <tbody align="center">
                        <tr>
                            <td><img alt="#" src={logoImage} className="rectangleImageAbout"/></td>
                            <td><img alt="#" src={logoImage} className="rectangleImageAbout"/></td>
                            <td><img alt="#" src={logoImage} className="rectangleImageAbout"/></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }

}

export default About;