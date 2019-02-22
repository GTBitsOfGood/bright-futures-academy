var Activity = require('../models/activity');
var express = require('express');

const activityRouter = express.Router();

activityRouter.route('/')
    .get((req, res) => {
        Activity.find({}, (err, activities) => {
            res.json(activities)
        })
    })

activityRouter.route('/:activityId')
    .get((req, res) => {
        Activity.findById(req.params.activityId, (err, activity) => {
            if (err) {
                res.status(500).send(err)
            } else {
                res.json(activity)
            }
        })
    })
    .post((req, res) => {
        let activity = new Activity(req.body);activity.save()
        res.status(201).send(activity)
    })

module.exports = activityRouter;
