let mongoose = require('mongoose');
let activity = require('activity.js')
let Schema = mongoose.Schema;

let StudentSchema = new Schema({
    id:
    {
        type: Number,
        required: true
    },
    activities: [
        {
            type: activity
        }],
    img_url: {
        type: String
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