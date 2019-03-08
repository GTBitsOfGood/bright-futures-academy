const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const mongoose = require("mongoose");
const Household = require("../models/household.js");
const keys = require("./keys.js");

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = keys.secretOrKey;
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