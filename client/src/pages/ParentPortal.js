import React, { Component } from 'react';
import PrimaryNavBar from './../components/Navbar';
import StudentCard from './../components/StudentCard';
import AnnouncementList from './../components/Announcements';
import {Button} from 'reactstrap';
import './css/ParentPortal.css';


//TODO: Figure out he correct URL's for Production
const API_STUDENT_DEV = "http://localhost:5000/api/student/"
const API_STUDENT_PROD = "";
/**
 * Parent class for Parent portal. Placeholder cards for student information
 */
class PaymentPortal extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      students: []
    }

    this.ReactIsInDevelomentMode = this.ReactIsInDevelomentMode.bind(this);
    
  }

  /**
   * Makes a fetch request to either dev or prod
   * as soon as the component mounts and updates the state
   */
  componentDidMount(){
    //TODO: Figure out how it is being passed later : this.props.houseHoldID
    //TODO: Add logic for retrieving householdID
    if (this.ReactIsInDevelomentMode()){
      //Fetch the student list
      let urlToFetch = API_STUDENT_DEV + '5c8680ffad46ec4f26e7b46f';
      fetch(urlToFetch)
      .then(response => response.json())
      .then(data => this.setState({students: data}))
    } else {
      let urlToFetch = API_STUDENT_PROD + '5c8680ffad46ec4f26e7b46f';
      fetch(urlToFetch)
      .then(response => response.json())
      .then(data => this.setState({students: data.students}))
    }
  }

  /**
  * Return whether React is in dev or production
  */
  ReactIsInDevelomentMode(){ 
    return '_self' in React.createElement('div');
  }
 
  //TODO: Add logic for making payment
  render() {
    console.log("Rendering")
    return (
    <div id='parent-portal-container'>
      <PrimaryNavBar />
      <div className="container"> 
          {this.state.students.map(function(d, id) {
            return <StudentCard key= {d.id} studentName={d.name.first + " " + d.name.last} studentID = {d.id} studentBalance={d.amount_due} />
          })}
<<<<<<< HEAD
      <AnnouncementList />
=======
      <AnnouncementList announcements={this.state.announcements}/>
>>>>>>> 721c613b3c70c85bd66208cdd28434c55790e616
      </div>
      <Button>Make Payment</Button>
      </div>
    );
  }
}

export default PaymentPortal;