var Student = require('../models/student');
var Household = require('../models/household');
var express = require('express');

const studentRouter = express.Router();

studentRouter.route('/')
    .get((req, res) => {
        Student.find({}, (err, activities) => {
            res.json(activities)
        })
    })

studentRouter.route('/:householdId/')
    .post((req, res) => {
        let student = new Student(req.body);
        student.save();
        Household.findById((req.params.householdId), (err, household) => {
            if (err) {
                res.status(500).send(err)
            } else {
                household.students.insertOne(student)
                res.status(201).json(student)
            }
        })
    })


studentRouter.route('/:householdId/:studentId')
    .get((req, res) => {
        Household.findById((req.params.householdId), (err, household) => {
            if (err) {
                res.status(404).send("could not find household")
            } else {
                let student = household.students.findOne({ _id: req.studentId })
                if (student === undefined) {
                    res.status(404).send("could not find student")
                } else {
                    res.json(student)
                }
            }
        })
    })
    .delete((req, res) => {
        Household.findById((req.params.householdId), (err, household) => {
            if (err) {
                res.status(404).send("could not find household")
            } else {
                var deletedCount = household.students.deleteOne({ _id: req.params.studentId }).deletedCount
                if (deletedCount == 0) {
                    res.status(404)
                } else {
                    res.status(200)
                }
            }
        })
    })

module.exports = studentRouter;
