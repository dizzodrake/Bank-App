import {LOG_IN, LOG_OUT, GET_BALANCE} from '../actions/types';

const logInState = {
    emain:'',
    password:''
}
export default function log(state= logInState, action) {
    switch (action.type) {
        case LOG_IN:
            return state + action.payload
            return GET_BALANCE;
        case LOG_OUT:
            return state + action.payload;
            default:
                return state
    }
}