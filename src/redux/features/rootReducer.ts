import { combineReducers } from "@reduxjs/toolkit";
import countryReducer from "./countrySlice";

const rootReducer = combineReducers({
  country: countryReducer,
});

export default rootReducer;
