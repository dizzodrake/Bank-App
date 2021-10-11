import {TRANSFER} from '../actions/types';

const initialState = 50000;

export default function transferReducer( state=initialState, action){
    switch (action.type) {
        case TRANSFER:
            return state - action.payload;
        default:
            return state;
    }
}