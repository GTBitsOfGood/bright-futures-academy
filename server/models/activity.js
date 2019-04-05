let mongoose = require('mongoose');
let Schema = mongoose.Schema;

activitySchema = new Schema({
    date: {
        type: Date,
        required: true,
        default: new Date()
    },
    amount: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    paypalId: {
        type: String,
    }
})

module.exports = mongoose.model('Activity', activitySchema)
