import React, { Component } from 'react';
import PrimaryNavBar from './../components/Navbar';
import StudentCard from './../components/StudentCard';
import AnnouncementList from './../components/Announcements';
import {Button} from 'reactstrap';
import './css/ParentPortal.css';

const API_STUDENT_DEV = "http://localhost:3001/api/student/";
const API_STUDENT_PROD = "";
/**
 * Parent class for Parent portal. Placeholder cards for student information
 */
class PaymentPortal extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      announcements: this.props.announcements,
      students: ""
    }

    this.ReactIsInDevelomentMode = this.ReactIsInDevelomentMode.bind(this);
  }

  ReactIsInDevelomentMode(){ 
    return '_self' in React.createElement('div');
  }

  getStudentInfo(){
    //TODO: Make an API call to fetch all students of the households
    if (this.ReactIsInDevelomentMode()){
      let urlToFetch = API_STUDENT_DEV + this.props.houseHoldID;
      fetch(urlToFetch)
      .then(response => response.json())
      .then(data => this.parseData())
    }
  }

  //TODO: ADD KEYS FOR ANNOUNCEMENTS. 
  //TODO: Add logic for page changing. 
  //TODO: Add logic for making payment
  render() {
    return (
    <div id='parent-portal-container'>
      <PrimaryNavBar />
      <div className="container"> 
      <StudentCard studentName={"Name1"} studentID={1} studentBalance={1234}/>
          <StudentCard studentName={"Name2"} studentID={2} studentBalance={123}/>
          <StudentCard studentName={"Name2"} studentID={2} studentBalance={123}/>
          <StudentCard studentName={"Name2"} studentID={2} studentBalance={123}/>
          <StudentCard studentName={"Name2"} studentID={2} studentBalance={123}/>
          <StudentCard studentName={"Name2"} studentID={2} studentBalance={123}/>
      <AnnouncementList announcements={["some stuff1", "some stuff2", "some stuff3"]}/>
      </div>
      <Button>Make Payment</Button>
      </div>
    );
  }
}

export default PaymentPortal;