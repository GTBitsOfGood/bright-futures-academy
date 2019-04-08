const Household = require('../models/household');

function getHousehold(householdId, callback) {
    // householdId = new ObjectId(householdId)
    Household.findById(householdId, (err, household) => {
        if (err) {
            err.statusCode = 500
            return callback(err, null)
        } else if (!household) {
            err = new Error(`Could not find household with id ${householdId}`)
            err.statusCode = 404
            return callback(err, null)
        }
        callback(null, household, household.save.bind(household))
    })
}

function getStudent(householdId, studentId, callback) {
    getHousehold(householdId, (err, household, saveFunction) => {
        if (err) {
            return callback(err, null)
        }
        var student = household.students.id(studentId);
        if (!student) {
            err = new Error(`Could not find student with id ${studentId}`)
            err.statusCode = 404
            return callback(err, null)
        }
        callback(null, student, saveFunction)
    })
}

function getActivity(householdId, studentId, activityId, callback) {
    getStudent(householdId, studentId, (err, student, saveFunction) => {
        if (err) {
            return callback(err, null)
        }
        var activity = student.activities.id(activityId);
        if (!activity) {
            err = new Error(`Could not find activity with id ${activityId}`)
            err.statusCode = 404
            return callback(err, null)
        }
        callback(null, activity, saveFunction)
    })
}

module.exports = {
    getHousehold,
    getStudent,
    getActivity
}
