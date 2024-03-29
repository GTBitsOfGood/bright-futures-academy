import React, { Component } from 'react';
import { infographic, trophy, book, gradCap } from './../images'
import './css/Infographic.css';

/**
 * Container class for cards on parent portal page
 */
class Infographic extends Component {
    constructor(props){
        super(props);
    }


    render() {
     return(
        <div className="infographic">
            <div className="row">
                <div className="section">
                    <img src={book} className="icon"/>
                    <h2 className="infographicH2Div">50+</h2>
                    <p className="infographicPDiv">Active Courses</p>
                </div>

                <div className="section">
                    <img src={gradCap} className="icon"/>
                    <h2 className="infographicH2Div">200+</h2>
                    <p className="infographicPDiv">Active Students</p>
                </div>

                <div className="section">
                    <img src={trophy} className="icon"/>
                    <h2 className="infographicH2Div">10+</h2>
                    <p className="infographicPDiv">Awards</p>
                </div>
            </div>
        </div>

    );
}


}

export default Infographic;
