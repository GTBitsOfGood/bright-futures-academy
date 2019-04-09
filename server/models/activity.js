let mongoose = require('mongoose');

activitySchema = new mongoose.Schema({
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
