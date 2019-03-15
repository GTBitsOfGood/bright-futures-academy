var Student = require('../models/student');
var Household = require('../models/household');
var express = require('express');

const studentRouter = express.Router();

/**
* GET: get all students across all households
* DELETE: !!!DANGER!!! delete all students
*/
studentRouter.route('/')
    .get((req, res) => {
        Student.find({}, (err, students) => {
            if (err) {
                return res.status(500).json(err)
            }
            res.status(200).json(students)
        })
    })
    .delete((req, res) => {
        Student.remove({}, (err) => {
            if (err) {
                return res.status(500).json(err)
            }
            res.status(204).send("Deleted all students.")
        })
    })

/**
* params: household id
* POST: create a new student in the given household
* GET: get all students in the given household
*/
studentRouter.route('/:householdId/')
    .post((req, res) => {
        Household.findById((req.params.householdId), (err, household) => {
            if (err) {
                return res.status(500).json(err)
            } else if (!household) {
                return res.status(404).json(new Error("Could not find household"))
            }
            const student = new Student(req.body);
            household.students.push(student)
            household.save((err) => {
                if (err) {
                    return res.status(500).json(err)
                }
                res.status(201).json(student)
            })
        })
    })
    .get((req, res) => {
        Household.findById((req.params.householdId), (err, household) => {
            if (err) {
                return res.status(500).json(err)
            } else if (!household) {
                return res.status(404).json(new Error("Could not find household."))
            }
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
                return res.status(500).send(err)
            } else if (!household) {
                return res.status(404).json(new Error("Could not find household."))
            }
            const student = household.students.id(req.studentId)
            if (student === null) {
                return res.status(404).send("Could not find student.")
            }
            res.status(200).json(student)
        })
    })
    .delete((req, res) => {
        Household.findById((req.params.householdId), (err, household) => {
            if (err) {
                return res.status(500).json(err)
            } else if (!household) {
                return res.status(404).json(new Error("Could not find household."))
            }
            const student = household.students.id(req.params.studentId)
            if (student === null) {
                return res.status(404).json(new Error("Could not find student."))
            }
            student.remove()
            household.save((err) => {
                if (err) {
                    return res.status(500).json(err)
                }
                res.status(200).json(student)
            })
        })
    })

module.exports = studentRouter;
