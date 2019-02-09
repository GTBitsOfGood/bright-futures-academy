import React from 'react';
import logoImage from './../images'
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

export default class BFSNav extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.dropdownOneToggle = this.dropdownOneToggle.bind(this);
    this.dropdownTwoToggle = this.dropdownTwoToggle.bind(this);
    this.state = {
      isOpen: false, 
      isDropdownOneOpen: false, 
      isDropdownTwoOpen: false
    };
  }

  dummyToggle = () => {
      console.log("dummy");
  }

  dropdownOneToggle(){
      this.setState({
        isDropdownOneOpen : !this.state.isDropdownOneOpen
      });
  }
  dropdownTwoToggle(){
    this.setState({
        isDropdownTwoOpen : !this.state.isDropdownTwoOpen
    });
}
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/"><img alt="Brand" src={logoImage[0]} height="80px"/></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
            <NavItem>
                <NavLink href="/">Home</NavLink>
              </NavItem>

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

              <Dropdown isOpen={this.state.isDropdownTwoOpen}  toggle={this.dummyToggle} onMouseEnter={this.dropdownTwoToggle} onMouseLeave={this.dropdownTwoToggle} nav inNavbar>
                <DropdownToggle nav caret>
                  Payments
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                      <a href='/makepayment'>Make a payment</a>
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
                    <Button>Sign out</Button>
                </NavItem>

            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}