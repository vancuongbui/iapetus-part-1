import { combineReducers } from 'redux';
import AudioReducer from './AudioReducer';

export default combineReducers({
    iconName: AudioReducer,
});