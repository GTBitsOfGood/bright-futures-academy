import React, { Component } from 'react';
import './css/StudentCard.css';
import { Card, CardText, CardBody,
    CardTitle, CardSubtitle, Button} from 'reactstrap';
import { logoImage } from './../images'
import {Link} from 'react-router-dom';
/**
 * Container class for cards on parent portal page
 */
class StudentCard extends Component {
    constructor(props){
        super(props);
        this.state = {
            studentName: this.props.studentName,
            studentID: this.props.studentID,
            studentBalance: this.props.studentBalance
        }
    }


    render() {
     return(
      <Card>
        <img width="150px" position="absolute" src={logoImage} alt="Student" />
        <CardBody>
          <div>
          <CardTitle>Name: {this.state.studentName}</CardTitle>
          <CardSubtitle>ID: {this.state.studentID}</CardSubtitle>
          <CardText>Balance Due: {this.state.studentBalance}</CardText>
          <Button>Details</Button>
          <Button tag={Link} to="/paymentPage">Make a Payment</Button>
          </div>
        </CardBody>

      </Card>
    );
}


}

export default StudentCard;
