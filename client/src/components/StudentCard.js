import React, { Component } from 'react';
import './StudentCard';
import { Card, CardImg, CardText, CardBody,
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
      <Card height="50px !important">
        <img width="250px" position="absolute" src={logoImage} alt="Student" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    );
}


}

export default StudentCard;