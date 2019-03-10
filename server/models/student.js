let mongoose = require('mongoose');
let Activity = require('./activity').schema;
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
    activities: [Activity],
=======
    activities: [Object],
>>>>>>> Fix embedded schema types
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
