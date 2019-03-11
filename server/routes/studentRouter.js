var Student = require('../models/student');
var Household = require('../models/household');
var express = require('express');

const studentRouter = express.Router();

/**
* GET: get all students across all households
*/
studentRouter.route('/')
    .get((req, res) => {
        Student.find({}, (err, activities) => {
            if (err) {
                return res.status(500).json(err)
            }
            res.json(activities)
        })
    })

/**
* params: household id
* POST: create a new student in the given household
* GET: get all students in the given household
*/
studentRouter.route('/:householdId/')
    .post((req, res) => {
        let student = new Student(req.body);
        student.save();
        Household.findById((req.params.householdId), (err, household) => {
            if (err) {
                return res.status(500).json(err)
            }
            household.students.push(student)
            //Save the modified household
            household.save()
            res.status(201).json(student)
        })
    })
    .get((req, res) => {
        Household.findById((req.params.householdId), (err, household) => {
            if (err) {
                return res.status(500).json(err)
            }
            console.log(household.students)
            res.status(201).json(household.students)
        })
    })

/**
* params: household id, student id
* GET: get the student corresponding to the given student id
* DELETE: delete the student corresponding to the given student id
*/
studentRouter.route('/:householdId/:studentId')
    .get((req, res) => {
        Household.findById((req.params.householdId), (err, household) => {
            if (err) {
                return res.status(404).send("could not find household")
            }
            var student = household.students.find((student) => student.id === req.studentId);
            if (student === undefined) {
                return res.status(404).send("could not find student")
            }
            res.json(student)
        })
    })
    .delete((req, res) => {
        Household.findById((req.params.householdId), (err, household) => {
            if (err) {
                return res.status(404).send("could not find household")
            }
            var deletedCount = household.students.deleteOne({ _id: req.params.studentId }).deletedCount
            if (deletedCount == 0) {
                return res.status(404)
            }
            res.status(200)
        })
    })

module.exports = studentRouter;
