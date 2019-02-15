import React, { Component } from 'react';
import PrimaryNavBar from './../components/Navbar';
import StudentCard from './../components/StudentCard';
import Announcements from './../components/Announcements';
import {Button} from 'reactstrap';
import './css/ParentPortal.css';
/**
 * Parent class for Parent portal. Placeholder cards for student information
 */
class PaymentPortal extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
    }
  }

  getStudentInfo(){
    //TODO: Make an API call to fetch all students of the households
  }

  render() {
    return (
    <div id='p-p-container'>
      <PrimaryNavBar />
      <div className="container"> 
      <StudentCard studentName={"Name1"} studentID={1} studentBalance={1234}/>
          <StudentCard studentName={"Name2"} studentID={2} studentBalance={123}/>
          <StudentCard studentName={"Name2"} studentID={2} studentBalance={123}/>
          <StudentCard studentName={"Name2"} studentID={2} studentBalance={123}/>
      <Announcements />
      </div>
      <Button>Make Payment</Button>
      </div>
    );
  }
}

export default PaymentPortal;