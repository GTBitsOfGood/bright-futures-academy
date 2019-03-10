let mongoose = require('mongoose');

let student = require('./student')

let Schema = mongoose.Schema;

let HouseHoldSchema = new Schema({
    students: [
        student
    ],
    paypal_id: {
        type: String
    }
})

module.exports = mongoose.model('Household', HouseHoldSchema)
