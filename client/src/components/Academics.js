import React, { Component } from 'react';
import './css/Academics.css';
import { logoImage, teacher0, teacher1, teacher2, teacher3, teacher4, teacher5, teacher6, teacher7, teacher8, teacher9 } from './../images';


/**
 * Academics component for the Academics page.
 */
class Academics extends Component {

    constructor(props) {
        super(props)

        this.generateTeachers = this.generateTeachers.bind(this);
        this.generateTeacherItem = this.generateTeacherItem.bind(this);

        // to be replaced by reading from a file
        this.state = {
          teacherNames: ["Andrea Martinez", "Dr. Kenny Knight", "Richard D. Barnette", "Paul Johnson", "Adonnis Jules", 
                          "Davionne Longman", "Mario Luque", "Anthony Pabon", "Amanda Taylor", "Minister Erich Thomas"],
          teacherTitles: ["Principal", "Dean of Students", "Middle School English Teacher", "History Teacher", "Bible Teacher", 
                          "Administrative Assistant", "Middle School Math Teacher", "High School Science Teacher", "Middle School Science Teacher",
                          "High School Math Teacher"],
          sampleDescrption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lobortis justo non efficitur auctor. In elementum est interdum iaculis feugiat. Pellentesque convallis cursus tempor. Donec nibh ante, vulputate ac tellus sollicitudin, finibus mattis mi.",
          teacherPictures: [teacher0, teacher1, teacher2, teacher3, teacher4, teacher5, teacher6, teacher7, teacher8, teacher9],
        }
    }

    generateTeacherItem(teacherIndex) {
      const teacherName = this.state.teacherNames[teacherIndex];
      const teacherTitle = this.state.teacherTitles[teacherIndex];
      return (
        <div className="teacherItem" className="teacherColumn">
          <img className="teacherPicture" src={this.state.teacherPictures[teacherIndex]}></img>
          <p className="teacherName">{teacherName}</p>
          <p className="teacherPosition">{teacherTitle}</p>
        </div>
      )
    }

    generateTeachers(teacherIndexes) {
      return (
        <div className="teacherContainer">
          {teacherIndexes.map(this.generateTeacherItem)}
        </div>
      )
    }

    render() {
      var numTeachers = this.state.teacherNames.length;
      var teacherIndexes = Array(numTeachers - 1 + 1).fill().map((_, idx) => 0 + idx); // [0, 1, ... numTeachers]

      return (
          <div className="academicContainer">
            <p className="title">Meet Our Teachers and Staff</p>
            <p className="bodyText">We are staffed by a full-time principal, a dean of students, and ten full-time teachers and four additional support staff. </p>
            {this.generateTeachers(teacherIndexes)}
            
          </div>
      );
    }

}

export default Academics;