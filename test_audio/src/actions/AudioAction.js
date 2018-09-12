import { 
    PLAYING_AUDIO,
    STOP_AUDIO,
    PAUSE_AUDIO,
    RESET_PLAY_LIST,
    PRELOAD_AUDIO,
    RECORD_AUDIO,
    SELECTED_ITEM,
} from './types';

export const preloadAudio = (iconName) => {
    return (dispatch) => {
        //preload content
        dispatch ({ type: PRELOAD_AUDIO, payload: iconName })
    };
};

export const playingAudio = (iconName) => {
    return (dispatch) => {
        //preload content
        dispatch ({ type: PLAYING_AUDIO, payload: iconName })
    };
};

