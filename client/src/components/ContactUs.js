import React, { Component } from 'react';
import './css/ContactUs.css';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Snackbar } from './';
import { Directions } from './../components';

/**
 * Contact Us component for contact page.
 */
class ContactUs extends Component {

    constructor(props) {
        super(props);

        this.onValueChange = this.onValueChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.snackbarMessage = this.snackbarMessage.bind(this);

        this.state = {
            name: '',
            email: '',
            subject: '',
            message: '',
            messageSentSuccess: true, // will be used to show a toast after they submit their message
            showSnackbar: false
        }
    }

    /**
     * Updates state values for respective input box
     * @param {*} e 
     */
    onValueChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    /**
     * Logic for when a user submits a message.
     */
    onSubmit() {
        // TODO: Add logic to submit/send email to BFA.
        // TODO: Add validation
        this.setState({
            showSnackbar: true,
            // TODO: in here set if our message was sent successfully
            messageSentSuccess: true
        });

        setTimeout(() => {
            this.setState({
                showSnackbar: false
            });
        }, 3000);
    }

    /**
     * Message snackbar should display when the message sent was successful (or not).
     * @param {*} messageSentSuccess 
     */
    snackbarMessage(messageSentSuccess) {
        if (messageSentSuccess) {
            return "Message sent successfully";
        } else {
            return "Message failed, please try again";
        }
    }

    render() {
        return (
            <div className="contactUsPageContainer">
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
                            <input type="text" name="name" value={this.state.name} onChange={(e) => {this.onValueChange(e)}} placeholder=" Insert Name Here" onFocus="if(this.value==this.defaultValue)this.value='';"/>
                            <p className="contactFormText">
                                Email Address *
                            </p>
                            <input type="text" name="email" value={this.state.email} onChange={(e) => {this.onValueChange(e)}} placeholder=" Insert Email Here" onFocus="if(this.value==this.defaultValue)this.value='';"/>
                            <p className="contactFormText">
                                Subject *
                            </p>
                            <input type="text" name="subject" value={this.state.subject} onChange={(e) => {this.onValueChange(e)}} placeholder=" Insert Subject Here" onFocus="if(this.value==this.defaultValue)this.value='';"/>
                            <p className="contactFormText">
                                Message *
                            </p>
                            <textarea type="text" name="message" className="contactUsMessageBox" value={this.state.message} onChange={(e) => {this.onValueChange(e)}} placeholder=" Insert Your Message Here" onFocus="if(this.value==this.defaultValue)this.value='';"/>
                            <input id="contactUsSubmitButton" type="button" value="Submit" onClick={this.onSubmit}/>
                        </div>
                    </div>
                    <div className="contactUsInfo">
                        <div className="contactUsTextContainer">
                            <FontAwesomeIcon icon={ faPhone } color="#ff4252"/>
                            <p className="contactUsText">
                                404-799-1249
                            </p>
                        </div>
                        <div className="contactUsTextContainer">
                            <FontAwesomeIcon icon={ faEnvelope } color="#ff4252"/>
                            <p className="contactUsText">
                                bfinfo@bfatl.org
                            </p>
                        </div>
                    </div>
                    
                </div>
                <Snackbar show={this.state.showSnackbar} message={this.snackbarMessage(this.state.messageSentSuccess)}/>
                <Directions />
            </div>
        );
    }
}

export default ContactUs;