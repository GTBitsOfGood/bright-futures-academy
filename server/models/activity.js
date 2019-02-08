let mongoose = require('mongoose');
let Schema = mongoose.Schema;

activitySchema = new Schema({
    date: {
        type: Date,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    }

})
module.exports = mongoose.model('Activity', activitySchema)