import { combineReducers } from "redux";
import userReducer from "./user/slice";

export default combineReducers({ // onde são passados os reducers
    user: userReducer
})