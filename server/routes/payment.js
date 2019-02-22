var express = require('express');
var router = express.Router();
//Testing Paypal API
require('dotenv').config()
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
    'client_id': process.env.client_id,
    'client_secret': process.env.client_secret
})

//Come up with a strategy to make dyanmic payment JSON


router.get('/', (req, res) => {
    console.log(process.env.client_id)
    res.send("Welcome to payment route")
})

router.post('/payment', (req, res) => {
    let create_payment_json = {
        "intent": "sale",
        "payer": {
            "payment_method": "paypal"
        },
        "redirect_urls": {
            "return_url": "http://localhost:5000/pay/success",
            "cancel_url": "http://localhost:5000/pay/cancel"
        },
        "transactions": [{
            "amount": {
                "currency": "USD",
                "total": "1.00"
            },
            "description": "This is the payment description."
        }]
    }
    paypal.webProfile.create(web_profile, function (error, profile) {
        if (error) {
            throw error;
        }
        else {
            console.log('Made profile')
            console.log(profile)
            var experience_profile_id = profile.id;
            create_payment_json.experience_profile_id = experience_profile_id;
            paypal.payment.create(create_payment_json, (error, payment) => {
                if (error) {
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

    const execute_payment_json = {
        "payer_id": payerId,
        "transactions": [{
            "amount": {
                "currency": "USD",
                "total": "1.00"
            }
        }]
    }
    paypal.payment.execute(paymentId, execute_payment_json, (error, payment) => {
        if (error) {
            throw error;
        }
        else {
            res.send("Success")
        }
    })
})

router.get('/cancel', (req, res) => {
    res.send("Cancelled")
})
module.exports = router;
