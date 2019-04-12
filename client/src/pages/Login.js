import React, { Component } from "react";
import { connect } from 'react-redux';  
import PropTypes from "prop-types";
import { loginHousehold } from "../actions/authActions";
import './css/Login.css';

import { logoImage } from './../images'

/**
 * Login page for parents
 */
class Login extends Component {
  constructor() {
    super();
    this.state = {
      householdId: "",
      password: "",
      errors: {},

    };
  }

  componentDidMount() {
    // If logged in and user navigates to Login page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/makePayment");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/makePayment"); // push user to dashboard when they login
    } else {
      this.props.history.push("/login"); // push user to dashboard when they login
    }

    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };
  
  onSubmit = e => {
    // prevent page from reloading
    e.preventDefault();
    const householdData = {
      householdId: this.state.householdId,
      password: this.state.password
    };
    console.log(householdData);
    // TODO: call the api route for login
    this.props.loginHousehold(householdData);
  };

  render() {
    const { errors } = this.state;
    return (
      <div className="loginBackground">
        <div className="loginBox">
          <img alt="#" src={logoImage} className="loginBFALogo"/>
          <div className="verticalLine"/>
            <form className="loginForm" noValidate onSubmit={this.onSubmit}>
              <h3 className="parentLogin">
                Parent Log in
              </h3>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.householdId}
                  error={errors.householdId}
                  id="householdId"
                  style={{"border": "none", "border-bottom": 1+"px solid"}}
                  placeholder="Email"
                  onFocus="if(this.value==this.defaultValue)this.value='';"                  
                />
              </div>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.password}
                  error={errors.password}
                  id="password"
                  type="password"
                  style={{"border": "none", "border-bottom": 1+"px solid"}}
                  placeholder="Password"
                  onFocus="if(this.value==this.defaultValue)this.value='';"
                />
              </div>
              <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                <input id="loginSubmitButton" type="submit" value="Submit" onClick={this.onSubmit}/>
              </div>
              <a className="forgotUsernameText" href="#">
              {/* TODO: Add links to this to redirect to */}
                Forgot Username / Password?
              </a>
              <p></p>
              <a className="forgotUsernameText" href="#">
              {/* TODO: Add links to this to redirect to */}
                Get your account →
              </a>
            </form>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  loginHousehold: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  {loginHousehold}
)(Login);
