import React, { Component } from 'react';
import { logoImage } from './../images'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem, Button } from 'reactstrap';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutHousehold } from "../actions/authActions";


/**
 * Container for the navbar component.
 * Currently shows a basic navbar with dummy links since there are no pages.
 */
class PrimaryNavBar extends Component {
  constructor(props) {
    super(props);

    //Allows the use of this keyword in the functions "XToggle"
    this.toggle = this.toggle.bind(this);
    this.dropdownOneToggle = this.dropdownOneToggle.bind(this);
    this.dropdownTwoToggle = this.dropdownTwoToggle.bind(this);
    this.dummyToggle = this.dummyToggle.bind(this)

    this.state = {
      isOpen: false,
      isDropdownOneOpen: false,
      isDropdownTwoOpen: false
    };
  }

  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutHousehold();
  };

  toggle() {
    this.setState({
      isOpen : !this.state.isOpen
    });
  }
  /**
   * Empty toggle to make sure that hover behaviour for dropdowns works as expected
   */
  dummyToggle() {
      console.log("dummy");
  }

  /**
   * Function controlling the My Accounts dropdown
   */
  dropdownOneToggle(){
      this.setState({
        isDropdownOneOpen : !this.state.isDropdownOneOpen
      });
  }

  /**
   * Function controlling the Payment dropdown
   */
  dropdownTwoToggle(){
    this.setState({
        isDropdownTwoOpen : !this.state.isDropdownTwoOpen
    });
}
/**
 * TODO: Add styling
 * TODO: Add logic for sign out.
 * TODO: Add a new logo for the Bright Futures academy
 */
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
        {
          /**
           * Temporary logo
           */
        }
          <NavbarBrand href="/"><img alt="Brand" src={logoImage} height="80px"/></NavbarBrand>
          {
            /**
             * Allows toggling the navbar for small(mobile) screens
             */
          }
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>

            <Nav className="ml-auto" navbar>

            <NavItem>
                <NavLink href="/">Home</NavLink>
              </NavItem>
              {
                /**
                * My Account dropdown with its children components
                */
              }
              <Dropdown isOpen={this.state.isDropdownOneOpen} toggle={this.dummyToggle} onMouseEnter={this.dropdownOneToggle} onMouseLeave={this.dropdownOneToggle} nav inNavbar>
                <DropdownToggle nav caret>
                  My Account
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                     <a href='/settings'>Settings</a>
                  </DropdownItem>
                  <DropdownItem>
                    <a href='/profile'>Profile</a>
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>

              {
                /**
                 * * Payment dropdown with its children components.
                 */
              }

              <Dropdown isOpen={this.state.isDropdownTwoOpen}  toggle={this.dummyToggle} onMouseEnter={this.dropdownTwoToggle} onMouseLeave={this.dropdownTwoToggle} nav inNavbar>
                <DropdownToggle nav caret>
                  Payments
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                      <a href='/makePayment'>Make a payment</a>
                  </DropdownItem>
                  <DropdownItem>
                      <a href='/paymenthistory'>Payment History</a>
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>

              <NavItem>
                <NavLink href="/help">Help</NavLink>
              </NavItem>

              <NavItem>
                    <Button onClick={this.onLogoutClick}>Sign out</Button>
                </NavItem>

            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

Navbar.propTypes = {
  logoutHousehold: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutHousehold }
)(Navbar);
