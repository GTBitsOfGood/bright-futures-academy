let mongoose = require('mongoose');
let Student = require('./student').schema;
let Schema = mongoose.Schema;

let HouseHoldSchema = new Schema({
    students: [
        Student
    ],
    paypal_id: {
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

module.exports = mongoose.model('Household', HouseHoldSchema)
