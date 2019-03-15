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
        Household.findById((req.params.householdId), (err, household) => {
            if (err) {
                // return res.status(500).json(err)
            }
            let student = new Student(req.body);
            household.students.push(student)
            // save() called on a parent schema will call its childrens' save() as well
            household.save((err) => {
                if (err) {
                    res.status(500).json(err);
                    return;
                }
            })
            console.log(household)
            res.status(201).json(student)
        })
    })
    .get((req, res) => {
        Household.findById((req.params.householdId), (err, household) => {
            if (err) {
                return res.status(500).json(err)
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
                return res.status(404).send("Could not find household.")
            }
            var student = household.students.id(req.studentId)
            if (student === null) {
                return res.status(404).send("Could not find student.")
            }
            res.json(student)
        })
    })
    .delete((req, res) => {
        Household.findById((req.params.householdId), (err, household) => {
            if (err) {
                return res.status(404).send("Could not find household.")
            }
            var student = household.students.id(req.params.studentId)
            if (student === null) {
                console.log("we're deleting")
                return res.status(404).send("Could not find student.")
            }
            student.remove()
            household.save((err) => {
                if (err) {
                    return res.status(500).json(new Error("Could not delete student."))
                }
            })
            console.log("what is happening")
            res.status(200)
        })
    })

module.exports = studentRouter;
