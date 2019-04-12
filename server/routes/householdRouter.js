// Load Household model
var Household = require('../models/household');
var express = require('express');
const util = require('../utils/routerHelpers')
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../config/keys.js");

// Load input validation
const validateLoginInput = require("../validation/login");

const householdRouter = express.Router();

// @route POST api/household/login
// @desc Login household and return JWT token
// @access Public
householdRouter.post("/login", (req, res) => {
    // Form validation
  const { errors, isValid } = validateLoginInput(req.body);
  // Check validation
    if (!isValid) {
      return res.status(400).json(errors);
    }
  const householdId = req.body.householdId;
  const password = req.body.password;
  
  // Find household by householdId
  Household.findOne({ householdId }).then(household => {
      // Check if household exists
      if (!household) {
        return res.status(404).json({ householdIdNotFound: "HouseholdId not found" });
      }
  // Check password
      bcrypt.compare(password, household.password).then(isMatch => {
          console.log(isMatch);
        if (isMatch) {
          // User matched
          // Create JWT Payload
          const payload = {
            // eventually householdId should just be called username to avoid confusion
            householdId: household.householdId, // might cause error with passport.js
            mongooseId: household._id 
          };
  // Sign token
          jwt.sign(
            payload,
            keys.secretOrKey,
            {
              expiresIn: 31556926 // 1 year in seconds
            },
            (err, token) => {
              res.json({
                success: true,
                token: "Bearer " + token
              });
            }
          );
        } else {
          return res
            .status(400)
            .json({ passwordincorrect: "Password incorrect" });
        }
      });
    });
  });

/**
* GET: get all households
* POST: create a new household
*/
householdRouter.route('/')
    .get((req, res, next) => {
        Household.find({}, (err, households) => {
            if (err) {
                return next(err)
            }
            res.status(200).json(households)
        })
    })
    .post((req, res) => {
        let household = new Household(req.body)
        household.save((err) => {
            if (err) {
              return next(err)
            }
            res.status(201).json(household)

        })
    })

/**
* params: household id
* GET: get the household corresponding to the given id
*/
householdRouter.route('/:householdId')
    .get((req, res, next) => {
        const { householdId } = req.params
        util.getHousehold(householdId, (err, household) => {
            if (err) {
                return next(err)
            }
            res.status(200).json(household)
        })
    })
    .delete((req, res, next) => {
        const { householdId } = req.params
        Household.findOneAndDelete(householdId, (err, household) => {
            if (err) {
                return next(err)
            }
            res.status(200).json(household)
        })
    })


module.exports = householdRouter;
