import { 
    PLAYING_AUDIO,
    STOP_AUDIO,
    PAUSE_AUDIO,
    RESET_PLAY_LIST,
    PRELOAD_AUDIO,
    RECORD_AUDIO,
    SELECTED_ITEM,
} from '../actions/types';

const INIT_STATE = {
    iconName: 'play',
};

export default ({ state=INIT_STATE, action }) => {
     switch (action.type) {
        case PRELOAD_AUDIO:
            return 'play';
        case PLAYING_AUDIO:
            return 'stop';
        default:
            return state;
     };
 };