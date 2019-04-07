let mongoose = require('mongoose');
require('mongoose-type-url');

let Activity = require('./activity')

let Schema = mongoose.Schema;
require('mongoose-type-url');



let StudentSchema = new Schema({
    studentId: {
        type: Number,
        required: true
    },
    amountDue: {
        type: Number,
        required: true,
        default: 0
    },
    /**
     * TODO: Fix the type for the activities array
     */
    activities: [
        Object
    ],
    img_url: {
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
