import React, { Component } from 'react';
import PrimaryNavBar from './../components/Navbar';
import StudentCard from './../components/StudentCard';
import AnnouncementList from './../components/Announcements';
import {Button} from 'reactstrap';
import './css/ParentPortal.css';


//TODO: Figure out he correct URL's
const API_HOUSEHOLD_DEV = "http://localhost:5000/api/household/";
const API_STUDENT_DEV = "http://localhost:5000/api/student/"
const API_STUDENT_PROD = "";
const API_HOUSEHOLD_PROD = "";
/**
 * Parent class for Parent portal. Placeholder cards for student information
 */
class PaymentPortal extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      announcements: this.props.announcements,
      students: [{id: 1234, name : {first: "Name_first", last:"name_last"}, amount_due:2000}]
    }

    this.ReactIsInDevelomentMode = this.ReactIsInDevelomentMode.bind(this);
    this.getStudentInfo()
  }

  ReactIsInDevelomentMode(){ 
    return '_self' in React.createElement('div');
  }

  getStudentInfo(){
    //TODO: Figure out how it is being passed later : this.props.houseHoldID
    if (this.ReactIsInDevelomentMode()){
      console.log("React is in dev mode...")
      //Fetch the student list
      let urlToFetch = API_HOUSEHOLD_DEV + '5c82c92f79971d22f1ce85f0';
      fetch(urlToFetch)
      .then(response => response.json())
      .then(data => this.setState({students: data.students}))
    } else {
      console.log("React is in production mode...")
      let urlToFetch = API_HOUSEHOLD_PROD + '5c82c92f79971d22f1ce85f0';
      fetch(urlToFetch)
      .then(response => response.json())
      .then(data => this.setState({students: data.students}))
    }
  }
 
  //TODO: Add logic for making payment
  render() {
    return (
    <div id='parent-portal-container'>
      <PrimaryNavBar />
      <div className="container"> 
          {this.state.students.map(function(d, id) {
            return <StudentCard key= {d.id} studentName={d.name.first + " " + d.name.last} studentID = {d.id} studentBalance={d.amount_due} />
          })}
      <AnnouncementList announcements={}/>
      </div>
      <Button>Make Payment</Button>
      </div>
    );
  }
}

export default PaymentPortal;