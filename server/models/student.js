let mongoose = require('mongoose');
require('mongoose-type-url');
<<<<<<< HEAD
let Activity = require('./activity')
=======
let activity = require('./activity').schema;
>>>>>>> ee6d13ad04c1fd2acc7acb6f2cff33e3d7fb8882
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
