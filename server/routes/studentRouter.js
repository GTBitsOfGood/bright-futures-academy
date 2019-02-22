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
                res.status(201).send(student)
            }
        })
    })


studentRouter.route('/:householdId/:studentId')
    .get((req, res) => {
        Household.findById((req.params.householdId), (err, household) => {
            if (err) {
                res.status(500).send(err)
            } else {
                const student = household.students.find({ _id: req.paramsstudentId })
                res.json(student);
            }
        })
    })

module.exports = studentRouter;
