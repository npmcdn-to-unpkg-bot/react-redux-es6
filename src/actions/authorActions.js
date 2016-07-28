import * as types from './actionTypes';
import courseApi from '../api/mockAuthorApi';
import {beginAjaxCall} from './ajaxStatusActions';

export function loadAuthorsSuccess(authors) {
    return {type: types.LOAD_AUTHORS_SUCCESS, authors};
}

export function createAuthorSuccess(course) {
    return {type: types.CREATE_AUTHOR_SUCCESS, course};
}

export function updateAuthorSuccess(course) {
    return {type: types.UPDATE_AUTHOR_SUCCESS, course};
}

export function loadAuthors() {
    // always return a function then accpets a dispatch
    return function(dispatch) {
        // thunk body
        dispatch(beginAjaxCall());
        return courseApi.getAllAuthors().then(authors => {
            dispatch(loadAuthorsSuccess(authors));
        }).catch(error => {
            throw(error);
        });
    };
}