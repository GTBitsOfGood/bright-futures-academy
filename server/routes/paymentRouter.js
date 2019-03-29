require('dotenv').config()

var express = require('express');


/* let Activity = require('../models/activity')
let Student = require('../models/student') */
var util = require('../utils/routerHelpers');
var router = express.Router();

//Testing Paypal API

let profile_name = Math.random().toString(36).substring(7);
let paypal = require('paypal-rest-sdk')

/**
 * TODO: Make sure that we can eventually start getting previously made web-profiles or just one
 */
const web_profile = {
    "name": profile_name,
    "presentation": {
        "brand_name": "Bright Futures Academy",
        "locale_code": "US"
    },
    "input_fields": {
        "allow_note": false,
        "no_shipping": 1,
        "address_override": 1
    }
}



paypal.configure({
    'mode': 'sandbox',
    'client_id': process.env.CLIENT_ID,
    'client_secret': process.env.CLIENT_SECRET
})



router.get('/', (req, res) => {
    res.send("Welcome to payment route")
})
/**
 * params: amount, studentid
 * POST: Creates a web profile and paypal payment
 */
router.post('/:amount/:studentId', (req, res) => {
    studentId = req.params.studentId
    web_profile.name = Math.random().toString(36).substring(7);

    let create_payment_json = {
        "intent": "sale",
        "payer": {
            "payment_method": "paypal"
        },
        "redirect_urls": {
            /**
             * TODO: Replace links with proper links for deployment
             */
            "return_url": `http://localhost:5000/api/payment/success/${studentId}`, //TODO: replace route with route after successful payment
            "cancel_url": `http://localhost:5000/api/payment/cancel/${studentId}` //TODO: replace route with route after a failed payment
        },
        "transactions": [{
            "amount": {
                "currency": "USD",
                "total": req.params.amount
            },
            "description": "This is the payment description."
        }]
    }
    paypal.webProfile.create(web_profile, function (error, profile) {
        if (error) {
            // console.log("Webprofile create error:", error.response)
            throw error;
        }
        else {
            var experience_profile_id = profile.id;
            create_payment_json.experience_profile_id = experience_profile_id;
            paypal.payment.create(create_payment_json, (error, payment) => {
                if (error) {
                    //console.log("Payment create error:", error.response)
                    throw error;
                }
                else {
                    //console.log("Create Payment Response")
                    for (let i = 0; i < payment.links.length; i++) {
                        if (payment.links[i].rel === "approval_url") {
                            console.log(payment)

                            /**
                             * Instead of redirecting to the approval_url, why not start with login then back to the previous page to continue
                             */
                            res.send(payment.links[i].href)

                        }
                    }
                }
            })

        }
    })
})


/**
 * GET: Gets success page when payment is successful
 * TODO: Make sure these will render the proper pages
 */

router.get('/success/:householdId/:studentId', (req, res) => {
    const payerId = req.query.PayerID;
    const paymentId = req.query.paymentId;
    const studentId = req.params.studentId;
    const householdId = req.params.householdId
    // console.log(studentId)
    let amount = 0
    paypal.payment.get(paymentId, (error, payment) => {
        if (error) {
            //console.log("Payment Get error:", error.response)

            throw error;
        }
        else {
            //console.log("Got amount")
            amount = payment.transactions[0].amount
            //console.log("Amount currency is", amount.currency)
            //console.log("Amount total is", amount.total)
            let execute_payment_json = {
                "payer_id": payerId,
                "transactions": [{
                    "amount": {
                        "total": amount.total,
                        "currency": amount.currency
                    },
                    "description": "This is the payment description."
                }]
            }
            paypal.payment.execute(paymentId, execute_payment_json, (error, payment) => {
                if (error) {
                    // console.log("Execute error:", error.response)
                    throw error;
                }
                else {
                    util.getStudent(householdId, studentId, (err, student, saveFunction) => {
                        if (err) {
                            return next(err)
                        }
                        const activity = new Activity(req.body)
                        student.amountDue += activity.amount
                        student.activities.push(activity)
                        saveFunction((err) => {
                            if (err) {
                                return next(err)
                            }
                            res.status(201).json(activity)
                        })


                    })
                    //let activity = new Activity({ date: new Date(), amount: amount.total, name: "Associated_account" })
                    /*  activity.save().catch((err) => {
                         console.log(err)
                         throw err
                     }) */
                    /**
                     * Gets a student by ID and adds the activity to the student's activity list
                     */
                    /*  Student.findOne({ id: studentId }, (err, results) => {
                         if (err) {
                             // console.log(err.response);
                             throw err;
                         }
                         else if (results === null) {
                             // console.log("Results are null: No students found")
                         }
                         else {
                             // console.log(results)
                             results.activites.push(activity);
                             return results.save()
                         }
                     }) */
                    // TODO: Change to redirect to specified page
                    res.send("Success")
                }
            })


        }
    })

})

/**
 * GET: Gets cancel page when payment is no sucessful
 * TODO: Make sure these will render the proper pages
 */
router.get('/cancel', (req, res) => {
    res.send("Cancelled")
})
module.exports = router;
