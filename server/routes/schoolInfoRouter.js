var schoolInfo = require('../models/schoolInfo.js');
var express = require('express');

const schoolInfoRouter = express.Router();

/**
* GET: get all households
*/
schoolInfoRouter.route('/')
    .get((req, res) => {
        schoolInfo.find({}, (err, stuff) => {
            console.log(stuff)
            if (err) {
                return res.status(500).json(err);
            }
            res.json(stuff);
        })
    })

/**
* GET: get the school's address
*/
schoolInfoRouter.route('/address')
    .get((req, res) => {
        schoolInfo.find({}, 'address', (err, schoolInfo) => {
            if (err) {
                return res.status(500).json(err)
            }
            res.json(schoolInfo)
        })
    })

/**
* TODO: We'll probably want to make this route let you get announcements from a certain time period.
* GET: get the school's announcements
*/
schoolInfoRouter.route('/announcements')
    .get((req, res) => {
        schoolInfo.find({}, 'announcements', (err, household) => {
            if (err) {
                return res.status(500).json(err)
            }
            res.json(household)
        })
    })

module.exports = schoolInfoRouter;
