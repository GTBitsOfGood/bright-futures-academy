const mongoose = require('mongoose');
const Activity = require('./activity')
require('mongoose-type-url');

let StudentSchema = new mongoose.Schema({
    studentId: {
        type: Number,
        required: true
    },
    amountDue: {
        type: Number,
        required: true,
        default: 0
    },
    activities: [Object],
    imgUrl: {
        type: mongoose.SchemaTypes.Url
    },
    name: {
        first: {
            type: String,
            required: true
        },
        last: {
            type: String,
            required: true
        },
        middle: String
    }
})

module.exports = mongoose.model('Student', StudentSchema);
