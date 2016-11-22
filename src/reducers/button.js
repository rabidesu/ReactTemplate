/**
 * Created by Nem on 19.11.2016.
 */
import { CHANGE_BUTTON } from '../constants/Button'

const initialState = {
        buttons: [
            {id: 1, name: 'Кнопка 1', selected: false},
            {id: 2, name: 'Кнопка 2', selected: false},
            {id: 3, name: 'Кнопка 3', selected: false}
        ]
    }
;

export default function buttons(state = initialState, action) {

    switch (action.type) {
        case CHANGE_BUTTON: {
            return { ...state, buttons: action.payload}
        }

        default: return state;
    }
}
