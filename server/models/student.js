let mongoose = require('mongoose');
<<<<<<< HEAD
require('mongoose-type-url');

let activity = require('./activity').schema;


let Activity = require('./activity')

=======
let Activity = require('./activity').schema;
>>>>>>> debfb3a3c5f489c84c93d5827699debe7f77a4ce
let Schema = mongoose.Schema;
require('mongoose-type-url');

let StudentSchema = new Schema({
    id: {
        type: Number,
        required: true
    },
    amount_due: {
        type: Number,
        required: true
    },
<<<<<<< HEAD
    /**
     * TODO: Fix the type for the activities array
     */
    activities: [
        Object
    ],
=======
    activities: [Object],
>>>>>>> debfb3a3c5f489c84c93d5827699debe7f77a4ce
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
