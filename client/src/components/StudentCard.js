import React, { Component } from 'react';
import './css/StudentCard.css';
import { Card, CardText, CardBody,
    CardTitle, CardSubtitle, Button} from 'reactstrap';
import logoImage from './../images'

  

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
          <CardTitle>Name: {this.state.studentName}</CardTitle>
          <CardSubtitle>ID: {this.state.studentID}</CardSubtitle>
          <CardText>Balance Due: {this.state.studentBalance}</CardText>
          <Button>Details</Button>
          <Button>Make a Payment</Button>
        </CardBody>
      </Card>
    );
}


}

export default StudentCard;