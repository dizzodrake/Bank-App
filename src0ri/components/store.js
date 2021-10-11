// import { all } from "q";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import {allReducer} from '../reducers';


const initialState = {};
const middleware = [thunk];

// const allReducer = 
const store = createStore(()=>allReducer, initialState,  applyMiddleware(...middleware));

export {store}