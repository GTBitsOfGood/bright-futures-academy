const Validator = require("validator");
const isEmpty = require("is-empty");

/**
 * Login logic for household id.
 */
module.exports = function validateLoginInput(data) {
  let errors = {};
  // Convert empty fields to an empty string so we can use validator functions
  data.householdId = !isEmpty(data.householdId) ? data.householdId : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  // householdId checks
  if (Validator.isEmpty(data.householdId)) {
    errors.householdId = "householdId field is required";
  } else if (!Validator.isAlpha(data.householdId)) {
    errors.householdId = "householdId is invalid";
  }
  // Password checks
  if (Validator.isEmpty(data.password)) {
    errors.password = "Password field is required";
  }
  return {
    errors,
    isValid: isEmpty(errors)
  };
};