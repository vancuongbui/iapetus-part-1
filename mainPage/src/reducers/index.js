// the windows to export all the reducers in this folder
import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducer';
import SelectedReducer from './SelectedReducer';

export default combineReducers({    
    libraries: LibraryReducer,
    selectedLibraryId: SelectedReducer
});
// libraries provide a list/array of article of a given author, such of Dante.
    // these libraries was called based on id, name
