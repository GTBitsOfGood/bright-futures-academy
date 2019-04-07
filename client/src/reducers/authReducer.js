import { SET_CURRENT_HOUSEHOLD, HOUSEHOLD_LOADING } from "../actions/types";

const isEmpty = require("is-empty");
const initialState = {
    isAuthenticated: false,
    household: {},
    loading: false
};

/**
 * Reducer for authenticating a user.
 * @param {*} state 
 * @param {*} action 
 */
export default function(state = initialState, action) {
    switch (action.type) {
        case SET_CURRENT_HOUSEHOLD: // setting household as authenticated
            return {
                ...state,
                isAuthenticated: !isEmpty(action.payload),
                household: action.payload
            };
        case HOUSEHOLD_LOADING: // setting state of household
            return {
                ...state,
                loading: true
            };
        default:
            return state;
    }
}
  