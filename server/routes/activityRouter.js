var util = require('../utils/routerHelpers');
var Activity = require('../models/activity');
var express = require('express');

const activityRouter = express.Router();

/**
 * GET: get all activities over all students
 */
activityRouter.route('/')
    .get((req, res, next) => {
        Activity.find({}, (err, activities) => {
            if (err) {
                return next(err)
            } else if (!activities) {
                err = new Error("Could not find household")
                err.statusCode = 404
                return next(err)
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
    .post((req, res, next) => {
        const { householdId, studentId } = req.params
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
    })
    .get((req, res, next) => {
        const { householdId, studentId } = req.params
        util.getStudent(householdId, studentId, (err, student) => {
            if (err) {
                return next(err)
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
    .get((req, res, next) => {
        const { householdId, studentId, activityId } = req.params
        util.getActivity(householdId, studentId, activityId, (err, activity) => {
                if (err) {
                    return next(err)
                }
                res.status(200).json(activity)
        })
    })
    .delete((req, res, next) => {
        const { householdId, studentId, activityId } = req.params
        util.getStudent(householdId, studentId, (err, student, saveFunction) => {
            if (err) {
                return next(err)
            }
            const activity = student.activities.id(activityId);
            if (!activity) {
                err = new Error("Could not find activity.")
                err.statusCode = 404
                return next(err)
            }
            student.amountDue -= activity.amount
            activity.remove()
            saveFunction((err) => {
                if (err) {
                    return next(err)
                }
                res.status(200).json(activity)
            })
        })
    })

module.exports = activityRouter;
