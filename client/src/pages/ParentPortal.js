import React, { Component } from 'react';
import PrimaryNavBar from './../components/Navbar';
import StudentCard from './../components/StudentCard';
import {Row, Col} from 'reactstrap';
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
    <div>
      <PrimaryNavBar />
      <Row>
          <Col margin_left="2px">
          <StudentCard studentName={"Name1"} studentID={1} studentBalance={1234}/>
     
          </Col>
          <Col>
          <StudentCard studentName={"Name2"} studentID={2} studentBalance={123}/>
          </Col>
      </Row>
      </div>
    );
  }
}

export default PaymentPortal;