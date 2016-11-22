/**
 * Created by Nem on 16.11.2016.
 */
import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAIL
} from '../constants/User'

import axios from 'axios';

export function handleLogin() {

    return function (dispatch) {
        dispatch({
            type: LOGIN_REQUEST
        });

        let url = 'http://127.0.0.1:8080/max';

        axios.get(url)
            .then(function (response) {
                console.log(response);
                let username = response.data.name;
                dispatch({
                    type: LOGIN_SUCCESS,
                    payload: username
                })
            })
            .catch(function (error) {
                dispatch({
                      type: LOGIN_FAIL,
                      error: true,
                      payload: new Error('Ошибка авторизации')
                  })
            });

        // axios.get(url, function(result){
        //     if (r.session) {
        //         let username = r.session.user.first_name;
        //
        //         dispatch({
        //             type: LOGIN_SUCCESS,
        //             payload: username
        //         })
        //     } else {
        //       dispatch({
        //           type: LOGIN_FAIL,
        //           error: true,
        //           payload: new Error('Ошибка авторизации')
        //       })
        //     }
        // }, 4)
    }
}