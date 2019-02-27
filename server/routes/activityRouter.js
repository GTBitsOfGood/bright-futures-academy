var Activity = require('../models/activity');
var express = require('express');

const activityRouter = express.Router();

activityRouter.route('/')
    .get((req, res) => {
        Activity.find({}, (err, activities) => {
            res.json(activities)
        })
    })

activityRouter.route('/:householdId/:studentId')
    .post((req, res) => {
        Household.findById((req.params.householdId), (err, household) => {
            if (err) {
                res.status(404).send("could not find household")
            } else {
                let student = household.students.findOne({ _id: req.studentId })
                if (student === undefined) {
                    res.status(404).send("could not find student")
                } else {
                    let activity = new Activity(req.body)
                    activity.save()
                    student.amount_due += activity.amount
                    student.activities.insertOne(activity)
                    res.status(201).json(activity)
                }
            }
        })
    })
    .get((req, res) => {
        Household.findById((req.params.householdId), (err, household) => {
            if (err) {
                res.status(404).json("could not find household")
            } else {
                let student = household.students.findOne({ _id: req.studentId })
                if (student === undefined) {
                    res.status(404).json("could not find student")
                } else {
                    res.status(200).json(student.activities)
                }
            }
        })
    })

activityRouter.route('/:householdId/:studentId/:activityId')
    .get((req, res) => {
        Household.findById((req.params.householdId), (err, household) => {
            if (err) {
                res.status(404).send("could not find household")
            } else {
                let student = household.students.findOne({ _id: req.studentId })
                if (student === undefined) {
                    res.status(404).send("could not find student")
                } else {
                    var activity = student.activities.findOne({ _id: req.params.activityId })
                    if (activity === undefined) {
                        res.status(404).send("could not find activity")
                    } else {
                        res.status(200).json(activity)
                    }
                }
            }
        })
    })
    .delete((req, res) => {
        Household.findById((req.params.householdId), (err, household) => {
            if (err) {
                res.status(404).send("could not find household")
            } else {
                let student = household.students.findOne({ _id: req.studentId })
                if (student === undefined) {
                    res.status(404).send("could not find student")
                } else {
                    var activity = student.activities.findOne({ _id: req.params.activityId })
                    if (activity === undefined) {
                        res.status(404)
                    } else {
                        student.amount_due -= activity.amount
                        student.activities.deleteOne({ _id: req.params.activityId }).deletedCount
                        res.status(204).json(activity)
                    }
                }
            }
        })
    })

module.exports = activityRouter;
