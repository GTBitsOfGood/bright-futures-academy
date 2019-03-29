require('dotenv').config()

var express = require('express');

var util = require('../utils/routerHelpers');
var router = express.Router();


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
            "return_url": `http://localhost:5000/api/payment/success/${studentId}`, //TODO: replace route with route after successful payment AND add householdID
            "cancel_url": `http://localhost:5000/api/payment/cancel/${studentId}` //TODO: replace route with route after a failed payment AND add householdID
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
            throw error;
        }
        else {
            var experience_profile_id = profile.id;
            create_payment_json.experience_profile_id = experience_profile_id;
            paypal.payment.create(create_payment_json, (error, payment) => {
                if (error) {
                    throw error;
                }
                else {
                    for (let i = 0; i < payment.links.length; i++) {
                        if (payment.links[i].rel === "approval_url") {
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

            throw error;
        }
        else {
            //console.log("Got amount")
            amount = payment.transactions[0].amount
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

router.get('/*', (req, res) => {
    res.send("Invalid route")
})
module.exports = router;
