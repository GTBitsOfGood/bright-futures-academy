var Activity = require('../models/activity');
var express = require('express');

const activityRouter = express.Router();

/**
 * GET: get all activities over all students
 */
activityRouter.route('/')
    .get((req, res) => {
        Activity.find({}, (err, activities) => {
            if (err) {
                return res.status(500).json(err)
            } else if (!activities) {
                return res.status(404).json(new Error("Could not find household"))
            }
            res.status(200).json(activities)
        })
    })

/**
* params: household id, student id
* POST: create a new activity for the given student
* GET: get all activities for the given student
*/
activityRouter.route('/:householdId/:studentId')
    .post((req, res) => {
        Household.findById((req.params.householdId), (err, household) => {
            if (err) {
                return res.status(500).send(err)
            } else if (!household) {
                return res.status(404).send(new Error("Could not find household."))
            }
            const student = household.students.id(req.studentId);
            if (student === null) {
                return res.status(404).send(new Error("Could not find student."))
            }
            const activity = new Activity(req.body)
            student.amount_due += activity.amount
            student.activities.addToSet(activity)
            household.save((err) => {
                if (err) {
                    return res.status(500).json(err)
                }
                res.status(201).json(activity)
            })
        })
    })
    .get((req, res) => {
        Household.findById((req.params.householdId), (err, household) => {
            if (err) {
                return res.status(404).json(new Error("Could not find household"))
            }
            var student = household.students.id(req.studentId);
            if (student === null) {
                return res.status(404).json(new Error("could not find student"))
            }
            res.status(200).json(student.activities)
        })
    })

/**
* params: household id, student id, activity id
* GET: get the activity corresponding to the given activity id
* DELETE: delete the activity corresponding to the given activity id 
*/
activityRouter.route('/:householdId/:studentId/:activityId')
    .get((req, res) => {
        Household.findById((req.params.householdId), (err, household) => {
            if (err) {
                return res.status(404).json(new Error("Could not find household."))
            }
            var student = household.students.id(req.studentId);
            if (student === null) {
                return res.status(404).json(new Error("Could not find student"))
            }
            var activity = student.activities.id(req.activityId);
            if (activity === null) {
                return res.status(404).json(new Error("Could not find activity"))
            }
            res.status(200).json(activity)
        })
    })
    .delete((req, res) => {
        Household.findById((req.params.householdId), (err, household) => {
            if (err) {
                return res.status(404).json(new Error("Could not find household"))
            }
            var student = household.students.id(req.studentId);
            if (student === null) {
                return res.status(404).json(new Error("Could not find student"))
            }
            var activity = student.activities.id(req.activityId);
            if (activity === null) {
                return res.status(404).json(new Error("Could not find activity"))
            }
            student.amount_due -= activity.amount
            activity.delete()
            household.save((err) => {
                return res.status(500).json(err)
            })
            res.status(204).json(activity)
        })
    })

module.exports = activityRouter;
