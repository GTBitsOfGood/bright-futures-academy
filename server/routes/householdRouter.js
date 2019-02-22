var Household = require('../models/household');
var express = require('express');

const householdRouter = express.Router();

householdRouter.route('/')
    .get((req, res) => {
        Household.find({}, (err, households) => {
            if (err) {
                res.status(500).send(err)
            } else {
                res.json(households)
            }
        })
    })
    .post((req, res) => {
        let household = new Household(req.body)
        household.save()
        res.status(201).send(household)
    })

householdRouter.route('/:householdId')
    .get((req, res) => {
        Household.findById(req.params.householdId, (err, household) => {
            if (err) {
                throw err
            } else {
                res.json(household)
            }
        })
    })

module.exports = householdRouter;
