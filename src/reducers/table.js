/**
 * Created by Nem on 22.11.2016.
 */
import * as act from '../constants/Table'

const initialState = {
    header: ['Username', 'E-mail'],
    data: [],
    error: false,
    fieldNames: ['name', 'email'],
    selected: []
};

export default function table (state = initialState, action) {
    switch (action.type) {
        case act.GET_HEADER:
            return { ...state, header: action.payload.header, fieldNames: action.payload.fieldNames };
        case act.GET_DATA_REQUEST:
            return { ...state, error: false };
        case act.GET_DATA_SUCCESS:
            return { ...state, data: action.payload, error: false };
        case act.GET_DATA_FAIL:
            return { ...state, error: true };
        case act.SELECT_ROW:
            return { ...state, selected: action.payload };

        default: return state;
    }
}
