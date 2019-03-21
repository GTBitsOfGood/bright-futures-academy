import React, { Component } from 'react';
import { logoImage } from './../images'
import './css/Teachers.css';

/**
 * Teachers component.
 */
class Teachers extends Component {

    constructor(props) {
        super(props);
        this.state = {
          teachers: [{name:"Amanda Taylor", role:"Middle School Science Teacher",
                      bio:"Always with a passion for working with children, within her community"},
                      {name:"Person 2", role:"Teacher 2", bio:"Bio 2"},
                      {name:"Person 3", role:"Teacher 3", bio:"Bio 3"},
                      {name:"Person 4", role:"Teacher 4", bio:"Bio 4"}],
        }

        this.onClickSeeMore = this.onClickSeeMore.bind(this);
    }

    onClickSeeMore() {
        // TODO: Add page of teachers information
        alert("See more teachers");
    }

    render() {
        const { teachers } = this.state;
        return (
            <div className="card-container">
              <div className="title-text-container">
                <p className="Meet-Our-Teachers">
                    Meet Our Teachers
                </p>
                <p className="See-More" onClick={this.onClickSeeMore}>
                    See more >
                </p>
              </div>

              <div className="teacher-profile-container">
                <div src={logoImage} className="teacher-profile">
                  <p className="Teacher-Name"> {teachers[0].name} </p>
                  <p className="Teacher-Role"> {teachers[0].role} </p>
                  <p className="Teacher-Bio"> {teachers[0].bio} </p>
                </div>

                <div src={logoImage} className="teacher-profile">
                  <p className="Teacher-Name"> {teachers[1].name} </p>
                  <p className="Teacher-Role"> {teachers[1].role} </p>
                  <p className="Teacher-Bio"> {teachers[1].bio} </p>
                </div>

                <div src={logoImage} className="teacher-profile">
                  <p className="Teacher-Name"> {teachers[2].name} </p>
                  <p className="Teacher-Role"> {teachers[2].role} </p>
                  <p className="Teacher-Bio"> {teachers[2].bio} </p>
                </div>

                <div src={logoImage} className="teacher-profile">
                  <p className="Teacher-Name"> {teachers[3].name} </p>
                  <p className="Teacher-Role"> {teachers[3].role} </p>
                  <p className="Teacher-Bio"> {teachers[3].bio} </p>
                </div>

              </div>
            </div>
        );
    }
}

export default Teachers;
