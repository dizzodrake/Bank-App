import {REGISTER} from '../actions/types';

const initialState = {
    name: '',
    email: '',
    phoneNumber: '',
    password: '',
    account: (Math.random()),

}

export default function reg(state=initialState, action) {
    switch (action.type) {
        case REGISTER:
            return state + action.payload
    
        default:
            return state;
    }
}