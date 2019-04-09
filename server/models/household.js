let mongoose = require('mongoose');
let Student = require('./student')

let HouseholdSchema = new mongoose.Schema({
    students: [Object],
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
