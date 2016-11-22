/**
 * Created by Nem on 22.11.2016.
 */
import * as act from '../constants/Table'

import axios from 'axios';

export function getHeader() {

    return(dispath) => {
        dispath({
            type: act.GET_HEADER
        })
    }
}

export function handleGetData() {
    return function (dispatch) {
        dispatch({
            type: act.GET_DATA_REQUEST
        });

        let url = 'http://127.0.0.1:8080/getUsers';

        axios.get(url)
            .then(function (response) {
                let data = response.data;
                console.log('data', data)
                dispatch({
                    type: act.GET_DATA_SUCCESS,
                    payload: data
                })
            })
            .catch(function (error) {
                dispatch({
                    type: act.GET_DATA_FAIL,
                    error: true
                })
            });
    }
}

export function selectRow(selected, id) {
    if (selected.includes(id)) selected.pop(id);
    else selected.push(id);

    return (dispatch) => {
        dispatch({
            type: act.SELECT_ROW,
            payload: selected
        })
    }
}
