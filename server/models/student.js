let mongoose = require('mongoose');
require('mongoose-type-url');
let Activity = require('./activity')
let Schema = mongoose.Schema;

let StudentSchema = new Schema({
    id: {
        type: Number,
        required: true
    },
    amount_due: {
        type: Number,
        required: true
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