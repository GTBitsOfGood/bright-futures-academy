var Student = require('../models/student');
var util = require('../utils/routerHelpers');
var express = require('express');

const studentRouter = express.Router();

/**
* GET: get all students across all households
*/
studentRouter.route('/')
    .get((req, res, next) => {
        Student.find({}, (err, students) => {
            if (err) {
                return next(err)
            }
            res.status(200).json(students)
        })
    })

/**
* params: household id
* POST: create a new student in the given household
* GET: get all students in the given household
*/
studentRouter.route('/:householdId/')
    .post((req, res, next) => {
        const { householdId } = req.params
        util.getHousehold(householdId, (err, household, saveFunction) => {
            if (err) {
                return next(err)
            }
            const student = new Student(req.body)
            household.students.push(student)
            saveFunction((err) => {
                if (err) {
                    return next(err)
                }
                res.status(201).json(student)
            })
        })
    })
    .get((req, res, next) => {
        const { householdId } = req.params
        util.getHousehold(householdId, (err, household) => {
            if (err) {
                return next(err)
            }
            res.status(200).json(household.students)
        })
    })

/**
* params: household id, student id
* GET: get the student corresponding to the given student id
* DELETE: delete the student corresponding to the given student id
*/
studentRouter.route('/:householdId/:studentId')
    .get((req, res, next) => {
        const { householdId, studentId } = req.params
        util.getStudent(householdId, studentId, (err, student) => {
            if (err) {
                return next(err)
            }
            res.status(200).json(student)
        })
    })
    .delete((req, res, next) => {
        const { householdId, studentId } = req.params
        util.getStudent(householdId, studentId, (err, student, saveFunction) => {
            if (err) {
                return next(err)
            }
            student.remove()
            saveFunction((err) => {
                if (err) {
                    return next(err)
                }
                res.status(200).json(student)
            })
        })
    })

module.exports = studentRouter;
