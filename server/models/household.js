let mongoose = require('mongoose');
let student = require('./student').schema;
let Schema = mongoose.Schema;

let HouseHoldSchema = new Schema({
    students: [Student],
    paypal_id: {
        type: String
    }
})

module.exports = mongoose.model('Household', HouseHoldSchema)
