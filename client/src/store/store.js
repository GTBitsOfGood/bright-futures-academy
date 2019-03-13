import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../reducers";
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

const initialState = {};
const middleware = [thunk];


const composeEnhancers = composeWithDevTools({
  // options like actionSanitizer, stateSanitizer
});


/**
 * Store will contain our state tree.
 * rootReducer is the combination of the reducers we have.
 */
const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(
    applyMiddleware(...middleware),
  )
);

export default store;