import  * as ActionType from './actionTypes';
import { combineReducers } from 'redux';

const initalState = {
    showStatus: false,
    song: {},
    songs: []
}

function showStatus(showStatus = initalState.showStatus,action) {
    switch (action.type) {
        case ActionType.SHOW_PLAYER: return action.showStatus;
        default: return showStatus
    }
}
function song(song = initalState.song, action) {
    switch (action.type) {
        case ActionType.CHANGE_SONG: return action.song;
        default: return song
    }
}

export default combineReducers({
    showStatus,
    song
})