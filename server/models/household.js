let mongoose = require('mongoose');

let Student = require('./student')


let Schema = mongoose.Schema;

let HouseholdSchema = new Schema({
    students: [Student],
    paypalId: {
        type: String
    },
    householdId: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Household', HouseholdSchema)
