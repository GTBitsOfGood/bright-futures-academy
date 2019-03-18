var Activity = require('../models/activity');
var express = require('express');

const activityRouter = express.Router();

/**
 * GET: get all activities over all students
 */
activityRouter.route('/')
    .get((req, res) => {
        Activity.find({}, (err, activities) => {
            res.json(activities)
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
                return res.status(404).send("could not find household")
            }
            var student = household.students.find((student) => student.id === req.studentId);
            if (student === undefined) {
                return res.status(404).send("could not find student")
            }
            var activity = new Activity(req.body)
            activity.save()
            student.amount_due += activity.amount
            student.activities.insertOne(activity)
            res.status(201).json(activity)
        })
    })
    .get((req, res) => {
        Household.findById((req.params.householdId), (err, household) => {
            if (err) {
                return res.status(404).json("could not find household")
            }
            var student = household.students.find((student) => student.id === req.studentId);
            if (student === undefined) {
                return res.status(404).json("could not find student")
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
                return res.status(404).send("could not find household")
            }
            var student = household.students.find((student) => student.id === req.studentId);
            if (student === undefined) {
                return res.status(404).send("could not find student")
            }
            var activity = student.activities.find((activity) => activity._id === req.activityId);
            if (activity === undefined) {
                return res.status(404).send("could not find activity")
            }
            res.status(200).json(activity)
        })
    })
    .delete((req, res) => {
        Household.findById((req.params.householdId), (err, household) => {
            if (err) {
                return res.status(404).send("could not find household")
            }
            var student = household.students.find((student) => student.id === req.studentId);
            if (student === undefined) {
                return res.status(404).send("could not find student")
            }
            var activity = student.activities.find((activity) => activity._id === req.activityId);
            if (activity === undefined) {
                return res.status(404).send("could not find activity")
            }
            student.amount_due -= activity.amount
            student.activities.deleteOne({ _id: req.params.activityId }).deletedCount
            res.status(204).json(activity)
        })
    })

module.exports = activityRouter;
