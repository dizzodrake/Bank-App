import { combineReducers } from "redux";

import regReducer from './regReducer';
import logInReducer from './logInReducer';
import logOutReducer from './logOutReducer';
import transferReducer from './transferReducer';


const allReducer =  combineReducers({
    reg: regReducer,
    logIn: logInReducer,
    logOut: logOutReducer,
    transfer: transferReducer
})

export {allReducer};


// const allReducer = {regReducer, logInReducer, logOutReducer, transferReducer}