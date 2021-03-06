/**
 * Created by Nem on 15.11.2016.
 */
import {
    LOGIN_SUCCESS,
    LOGIN_FAIL
} from '../constants/User'

const initialState = {
    name: '',
    error: ''
};

export default function user(state = initialState, action) {

    switch(action.type){
        case LOGIN_SUCCESS:
            return { ...state, name: action.payload, error: '' };
        case LOGIN_FAIL:
            return { ...state, error: action.payload.message }

        default:
            return state;
    }
}