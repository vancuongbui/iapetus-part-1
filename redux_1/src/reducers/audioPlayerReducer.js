import {
    CLICKING,
} from '../actions/types';

const INIT_STATE = {
    number: 'zero',
};

export default (state = INIT_STATE, action) => {
    switch (action.type) {        
        case CLICKING:
            return "This is the click number " + action.payload;
        default:
            return state;
    }
};
