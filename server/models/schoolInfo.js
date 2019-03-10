let mongoose = require('mongoose');
let Schema = mongoose.Schema;

/**
 * Address will be static and hardcoded because I don't anticipate this changing anytime soon.
 * We can store this in the database though.
 * 
 * Announcements will be a string array.
 */
let SchoolInfoSchema = new Schema({
    address: {
        type: String,
        default: "1300 Joseph E. Boone Blvd NW #1000, Atlanta, GA 30314"
    },
    announcements: [{
        type: String,
        default: "This is an announcement"
    }]
})

module.exports = mongoose.model('schoolInfo', SchoolInfoSchema)
