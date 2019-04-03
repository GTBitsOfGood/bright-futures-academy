import React, { Component } from 'react';
import './css/ContactUs.css';

class ContactUs extends Component {

    constructor(props) {
        super(props);

        this.onValueChange = this.onValueChange.bind(this);

        this.state = {
            name: '',
            email: '',
            subject: '',
            message: ''
        }
    }

    onValueChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <div className="contactUsContainer">
                <div className="contactUsMain">
                    <p className="contactUsHeaderText">
                        Contact Us
                    </p>
                    <p className="contactUsDescriptionText">
                        Contact us about anything related to our organization, programs and services. Please give us a few details and we’ll get back to you soon.
                    </p>
                    <div className="contactUsInputBoxes">
                        <p className="contactFormText">
                            Name *
                        </p>
                        <input type="text" name="name" value={this.state.name} onChange={(e) => {this.onValueChange(e)}} placeholder="Insert Name Here" onFocus="if(this.value==this.defaultValue)this.value='';"/>
                        <p className="contactFormText">
                            Email Address *
                        </p>
                        <input type="text" name="email" value={this.state.email} onChange={(e) => {this.onValueChange(e)}} placeholder="Insert Name Here" onFocus="if(this.value==this.defaultValue)this.value='';"/>
                        <p className="contactFormText">
                            Subject *
                        </p>
                        <input type="text" name="subject" value={this.state.subject} onChange={(e) => {this.onValueChange(e)}} placeholder="Insert Name Here" onFocus="if(this.value==this.defaultValue)this.value='';"/>
                        <p className="contactFormText">
                            Message *
                        </p>
                        <input type="text" name="message" className="contactUsMessageBox" value={this.state.message} onChange={(e) => {this.onValueChange(e)}} placeholder="Insert Name Here" onFocus="if(this.value==this.defaultValue)this.value='';"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default ContactUs;