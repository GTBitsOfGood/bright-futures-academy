var Household = require('../models/household');
var express = require('express');

const householdRouter = express.Router();

/**
* GET: get all households
* POST: create a new household
*/
householdRouter.route('/')
    .get((req, res) => {
        Household.find({}, (err, households) => {
            if (err) {
                return res.status(500).json(err)
            }
            res.json(households)
        })
    })
    .post((req, res) => {
        let household = new Household(req.body)
        household.save()
        res.status(201).json(household)
    })

/**
* params: household id
* GET: get the household corresponding to the given id
*/
householdRouter.route('/:householdId')
    .get((req, res) => {
        Household.findById(req.params.householdId, (err, household) => {
            if (err) {
                return res.status(500).json(err)
            }
            res.json(household)
        })
    })

module.exports = householdRouter;
