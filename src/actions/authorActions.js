import * as types from './actionTypes';
import courseApi from '../api/mockAuthorApi';

export function loadAuthorsSuccess(authors) {
    return {type: types.LOAD_AUTHORS_SUCCESS, authors};
}

export function loadAuthors() {
    // always return a function then accpets a dispatch
    return function(dispatch) {
        // thunk body
        return courseApi.getAllAuthors().then(authors => {
            dispatch(loadAuthorsSuccess(authors));
        }).catch(error => {
            throw(error);
        });
    };
}