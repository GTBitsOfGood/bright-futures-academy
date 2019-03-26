var express = require('express');
var nodemailer = require("nodemailer");
//TODO: Change Email config file to whichever email BFA uses
//TODO: Find better way to store password
const emailCredentials = require("../config/email-server.js");
const emailRouter = express.Router();

var transporter = nodemailer.createTransport({
    service: "Gmail",
    auth : {
        user: emailCredentials.User,
        pass: emailCredentials.Pass
    }
});

transporter.verify((err, success) => {
    if (err) {
        console.log(err)
    } else {
        console.log("Server can send messages")
    }
})

/**
 * POST: Send an email to the address provided.
 */
emailRouter.route("/")
    .post((req, res) => {
        //sender name
        var name = req.body.name;
        //sending to
        var toName = req.body.toName;
        //message
        //TODO: Change the message
        var message = "TEST";


        //TODO: Change Name, Subject, and Content
        var mail = {
            from : name,
            to: toName,
            subject: "TEST",
            text: message
        }

        transporter.sendMail(mail, (err, data) => {
            if (err) {
                res.status(500).json({msg: 'fail'})
            } else {
                res.status(201).json({msg: "Success"})
                console.log("Email sent")
            }
        })
    })

module.exports = emailRouter;