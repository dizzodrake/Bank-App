import {LOG_OUT} from '../actions/types';

export default function(state, action){
    switch (action.type) {
        case LOG_OUT:
            return state;
    }
}