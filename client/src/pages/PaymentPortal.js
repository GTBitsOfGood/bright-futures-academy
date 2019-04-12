import React, { Component } from 'react';
import { PrimaryNavBar, StudentCard, AnnouncementList } from '../components';
import {Button} from 'reactstrap';
import './css/ParentPortal.css';
import { connect } from 'react-redux';  
import PropTypes from "prop-types";
import jwt_decode from "jwt-decode";
import {ReactIsInDevelomentMode} from '../components/Utils';

//TODO: Figure out he correct URL's for Production
const API_STUDENT_DEV = "http://localhost:5000/api/student/"
const API_STUDENT_PROD = "https://bright-futures-academy-dev.herokuapp.com/";
/**
 * Parent class for Parent portal. Placeholder cards for student information
 */
class PaymentPortal extends Component {

  constructor(props) {
    super(props);

    this.state = {
      students: [],
    }

  }

  /**
   * Makes a GET request to either dev or prod and fetches the student list
   * as soon as the component mounts and updates the state
   */
  componentDidMount(){
    //TODO: Figure out how it is being passed later : this.props.houseHoldID
    //TODO: Add logic for retrieving householdID

    const { householdId, mongooseId } = this.props.auth.household
    const idFromJwt = jwt_decode(localStorage.getItem('jwtToken'))

    if (idFromJwt.householdId === householdId) {
      const urlToFetch = ReactIsInDevelomentMode()
        ? API_STUDENT_DEV + mongooseId
        : API_STUDENT_PROD + mongooseId

      fetch(urlToFetch)
        .then(response => {
          if (response.status === 404 || response.status === 500) {
            alert("Could not load students. Please try again.")
            return []
          } else {
            return response.json()
          }
        })
        .then(data => this.setState({students: data}))
    }
  }

 
  //TODO: Add logic for making payment
  render() {
    return (
      <div id='parent-portal-container'>
        <PrimaryNavBar />
        <div className="container">
            {this.state.students.map(function(d, id) {
              return <StudentCard key= {d.id} studentName={d.name.first + " " + d.name.last} studentID = {d.id} studentBalance={d.amountDue} />
            })}
        <AnnouncementList />
        </div>
        <Button>Make Payment</Button>
        </div>
    );
  }
}

PaymentPortal.propTypes = {
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps
)(PaymentPortal);