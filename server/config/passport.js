const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const mongoose = require("mongoose");
const Household = require("../models/household.js");
const keys = require("./keys.js");

// Adding options to Passport.
const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = keys.secretOrKey;

// Getting the household and extracting the bearer token from them to use for 
// user related tasks
module.exports = passport => {
  passport.use(
    new JwtStrategy(opts, (jwt_payload, done) => {
      Household.findById(jwt_payload.id)
        .then(household => {
          if (household) {
            return done(null, household);
          }
          return done(null, false);
        })
        .catch(err => console.log(err));
    })
  );
};