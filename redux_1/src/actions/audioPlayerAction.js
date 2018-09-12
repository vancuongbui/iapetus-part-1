// import keyword of action type from the types.js
import {
    CLICKING,
} from './types';

export const testClickingAction = (number) => {
    return {
        type: CLICKING,
        payload: number
    }
};