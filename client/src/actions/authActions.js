import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";
import {
  GET_ERRORS,
  SET_CURRENT_HOUSEHOLD,
  HOUSEHOLD_LOADING
} from "./types";

import { ReactIsInDevelomentMode } from '../components/Utils';

const DEV_SERVER_LINK = "http://localhost:5000/api/household/"
const STAGING_SERVER_LINK = "https://bright-futures-academy-staging.herokuapp.com/api/household/"
const PRODUCTION_SERVER_LINK = "https://bright-futures-academy-dev.herokuapp.com/api/household/"

/**
 * Login - get household token
 */
export const loginHousehold = householdData => dispatch => {
  var link = ""
  if (ReactIsInDevelomentMode()) {
    link = DEV_SERVER_LINK + '/login';
  } else {
    link = PRODUCTION_SERVER_LINK + '/login';
  }

  axios
    .post(link, householdData)
    .then(res => {
      // Save to localStorage
      // Set token to localStorage
      const { token } = res.data;
      localStorage.setItem("jwtToken", token);

      // Set token to Auth header
      setAuthToken(token);
      // Decode token to get household data
      const decoded = jwt_decode(token);

      // Set current household
      dispatch(setCurrentHousehold(decoded));
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

/**
 * Set logged in household
 */
export const setCurrentHousehold = decoded => {
  return {
    type: SET_CURRENT_HOUSEHOLD,
    payload: decoded
  };
};

/**
 * Household loading
 */
export const setHouseholdLoading = () => {
  return {
    type: HOUSEHOLD_LOADING
  };
};

/**
 * Log household out
 */
export const logoutHousehold = () => dispatch => {
  // Remove token from local storage
  localStorage.removeItem("jwtToken");

  // Remove auth header for future requests
  setAuthToken(false);

  // Set current household to empty object {} which will set isAuthenticated to false
  dispatch(setCurrentHousehold({}));
};