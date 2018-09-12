// This reducer will return the selected state from store
export default (state = null, action) => {
    // also, it should be return something not undefined, null as default
    switch (action.type) {
        case 'select_library':
            return action.payload;
        default:
            return state;
    }
};
