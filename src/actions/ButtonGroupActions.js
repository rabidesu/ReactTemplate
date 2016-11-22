/**
 * Created by Nem on 19.11.2016.
 */
import { CHANGE_BUTTON } from '../constants/Button'

export function changeButton(id) {

    let newButtons =
        [
            {id: 1, name: 'Кнопка 1', selected: false},
            {id: 2, name: 'Кнопка 2', selected: false},
            {id: 3, name: 'Кнопка 3', selected: false}
        ];

    newButtons.map( (item) => {
        if (item.id === id) item.selected = true;
        else item.selected = false;
    });


    return (dispatch) => {

        dispatch({
            type: CHANGE_BUTTON,
            payload: newButtons
        })
    }
}