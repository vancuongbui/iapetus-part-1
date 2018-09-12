import { combineReducers } from 'redux';

// import reducers withit this folder
import audioPlayRedecer from './audioPlayerReducer';

export default combineReducers({
    clickNumber: audioPlayRedecer,
});