const UPDATE_EXTENSIONS = 'scratch-gui/toolbox/UPDATE_EXTENSIONS';

const initialState = {
    wedo: false,
    speech: false,
    sheets: false
};

const reducer = function (state, action) {
    if (typeof state === 'undefined') state = initialState;
    switch (action.type) {
    case UPDATE_EXTENSIONS:
        return Object.assign({}, state, action.extensions);
    default:
        return state;
    }
};

reducer.updateExtensions = function (extensions) {
    return {
        type: UPDATE_EXTENSIONS,
        extensions: extensions
    };
};

reducer.enableWedo = function () {
    console.log('enabling wedo');
    return reducer.updateExtensions({wedo: true});
};

reducer.enableSpeech = function () {
    return reducer.updateExtensions({speech: true});
};

reducer.enableSheets = function () {
    console.log("enabling ssheets.");
    return reducer.updateExtensions({sheets: true});
};

module.exports = reducer;
