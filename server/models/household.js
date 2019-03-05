let mongoose = require('mongoose');
<<<<<<< HEAD
let student = require('./student')
=======
let student = require('./student').schema;
>>>>>>> ee6d13ad04c1fd2acc7acb6f2cff33e3d7fb8882
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
