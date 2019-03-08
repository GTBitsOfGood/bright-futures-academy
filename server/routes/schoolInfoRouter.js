var schoolInfo = require('../models/schoolInfo.js');
var express = require('express');

const schoolInfoRouter = express.Router();

/**
* GET: get all households
*/
schoolInfoRouter.route('/')
    .get((req, res) => {
        res.status(201).json(schoolInfo.schema.obj);
        console.log(res);
    })

/**
* GET: get the school's address. Returns default address.
*/
schoolInfoRouter.route('/address')
    .get((req, res) => {
        res.status(201).json(schoolInfo.schema.obj.address);
    })

/**
* TODO: We'll probably want to make this route let you get announcements from a certain time period.
* GET: get the school's announcements, defaults "this is an announcement"
*/
schoolInfoRouter.route('/announcements')
    .get((req, res) => {
        res.status(201).json(schoolInfo.schema.obj.announcements);
    })

module.exports = schoolInfoRouter;
