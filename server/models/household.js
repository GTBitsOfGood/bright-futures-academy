let mongoose = require('mongoose');
let Student = require('./student').schema;

let HouseholdSchema = new mongoose.Schema({
    students: [Student],
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
