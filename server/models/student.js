const mongoose = require('mongoose');
const Activity = require('./activity').schema;
const Schema = mongoose.Schema;
require('mongoose-type-url');

let StudentSchema = new Schema({
    studentId: {
        type: Number,
        required: true
    },
    amountDue: {
        type: Number,
        required: true,
        default: 0
    },
    activities: [Activity],
    imgUrl: {
        type: mongoose.SchemaTypes.Url
    },
    name: {
        first: {
            type: String,
            required: true
        },
        last: {
            type: String,
            required: true
        },
        middle: String
    }
})

StudentSchema.statics.getStudents = function(householdId, callback) {
    Household.findById(householdId, (err, household) => {
        if (err) {
            callback(new Error('Could not find household'), {})
            return
        }
        callback({}, household.students)
    })
}

StudentSchema.statics.getStudent = function(householdId, studentId, callback) {
    Household.findById((householdId), (err, household) => {
        if (err) {
            callback(new Error('Could not find household'), {})
            return
        }
        const student = household.students.id(studentId)
        if (student === undefined) {
            callback(new Error('Could not find student'), {})
            return
        }
        callback({}, student)
    })
}

StudentSchema.statics.addStudentToHousehold = function(householdId, student, callback) {
    console.log(Household)
    Household.findById((householdId), (err, household) => {
        if (err) {
            callback(new Error('Could not find household'), {})
            return
        }
        const student = new
        household.students.addToSet(student)
        household.save((err) => {
            callback('Could not save new student', {})
            return
        })
        callback({}, student)
    })
}

module.exports = mongoose.model('Student', StudentSchema);

const Household = require('./household')