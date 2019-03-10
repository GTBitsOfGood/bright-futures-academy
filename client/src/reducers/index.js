import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";

/**
 * allows us to combine our reducers for easy export.
 */
export default combineReducers({
  auth: authReducer,
  errors: errorReducer
});