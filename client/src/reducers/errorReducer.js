import { GET_ERRORS } from "../actions/types";

const initialState = {};

/**
 * Reducer for our errors
 * @param {*} state 
 * @param {*} action 
 */
export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ERRORS: // if we get errors show them
      return action.payload;
    default:
      return state;
  }
}