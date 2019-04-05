import React, { Component } from "react";
import { connect } from 'react-redux';  
import PropTypes from "prop-types";
import { loginHousehold } from "../actions/authActions";
import { debug } from "util";

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
      <div className="container">
        <div style={{ marginTop: "4rem" }} className="row">
          <div className="col s8 offset-s2">
            <div className="col s12" style={{ paddingLeft: "11.250px" }}>
              <h4>
                <b>Login to Bright Futures Academy</b>
              </h4>
              <p className="grey-text text-darken-1">
                Don't have an account? <a href={"mailto:brightFuturesAcademyDev@gmail.com"}>Contact the Administrator</a>
              </p>
            </div>
            <form noValidate onSubmit={this.onSubmit}>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.householdId}
                  error={errors.householdId}
                  id="householdId"
                />
                <label htmlFor="householdId">householdId</label>
              </div>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.password}
                  error={errors.password}
                  id="password"
                  type="password"
                />
                <label htmlFor="password">Password</label>
              </div>
              <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                <button
                  style={{
                    width: "150px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px",
                    marginTop: "1rem"
                  }}
                  type="submit"
                  className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
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
