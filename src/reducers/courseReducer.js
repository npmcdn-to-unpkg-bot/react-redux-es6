import * as types from '../actions/actionTypes';
import initialState from './initialState';

// state is a slice of entire store
export default function courseReducer(state = initialState.courses, action) {
    switch(action.type) {
        case types.LOAD_COURSES_SUCCESS:
            return action.courses;
        case types.CREATE_COURSE_SUCCESS:
            return [...state, action.course];
        case types.UPDATE_COURSE_SUCCESS:
            return [...state.filter(course => course.id !== action.course.id), action.course];
        case types.DELETE_COURSE_SUCCESS: {
            console.log(action.id);
            return [...state.filter(course => course.id !== action.id)];

        }

        default:
            return state;
    }
}