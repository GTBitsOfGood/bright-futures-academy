require('dotenv').config()

var express = require('express');
let Activity = require('../models/activity')
var router = express.Router();
//Testing Paypal API

let profile_name = Math.random().toString(36).substring(7);
let paypal = require('paypal-rest-sdk')

//We may have to store USER_ID for name to prevent the creation of new profiles
//To prevent the possibility for an error thrown in the creation of one
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

//Come up with a strategy to make dyanmic payment JSON


router.get('/', (req, res) => {
    res.send("Welcome to payment route")
})

router.post('/payment/:amount/:studentId', (req, res) => {
    let create_payment_json = {
        "intent": "sale",
        "payer": {
            "payment_method": "paypal"
        },
        "redirect_urls": {
            //Redirect to next page
            "return_url": `http://localhost:5000/pay/success/?studentid=${req.params.studentId}`,
            "cancel_url": `http://localhost:5000/pay/cancel/?studentid=${req.params.studentId}`
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
            console.log("Webprofile create error:", error.response)
            throw error;
        }
        else {
            var experience_profile_id = profile.id;
            create_payment_json.experience_profile_id = experience_profile_id;
            paypal.payment.create(create_payment_json, (error, payment) => {
                if (error) {
                    console.log("Payment create error:", error.response)
                    throw error;
                }
                else {
                    console.log("Create Payment Response")
                    for (let i = 0; i < payment.links.length; i++) {
                        if (payment.links[i].rel === "approval_url")
                            res.redirect(payment.links[i].href)
                    }
                }
            })

        }
    })
})



router.get('/success', (req, res) => {
    const payerId = req.query.PayerID;
    const paymentId = req.query.paymentId;
    let amount = 0
    paypal.payment.get(paymentId, (error, payment) => {
        if (error) {
            console.log("Payment Get error:", error.response)

            throw error;
        }
        else {
            console.log("Got amount")
            amount = payment.transactions[0].amount
            console.log("Amount currency is", amount.currency)
            console.log("Amount total is", amount.total)
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
                    console.log("Execute error:", error.response)
                    throw error;
                }
                else {
                    let activity = new Activity({ date: new Date(), amount: amount.total, name: "Associated_account" })
                    activity.save().catch((err) => {
                        console.log(err)
                        throw err
                    })
                    //Change to redirect to specified page
                    res.send("Success")
                }
            })


        }
    })

})

router.get('/cancel', (req, res) => {
    res.send("Cancelled")
})
module.exports = router;
