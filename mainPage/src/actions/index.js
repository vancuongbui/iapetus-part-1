// locate all the actions from Action Creator
// it will be a javascript function
// Action will contain 2 things: type and payload
export const selectLibrary = (libraryId) => {
    return {
        type: 'select_library',
        payload: libraryId
    };
};
