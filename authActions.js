import axios from 'axios';
import { returnErrors } from './errorActions';

import { USER_LOADED, USER_LOADING, AUTH_ERROR, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT_SUCCESS } from './types';

// Check token & load user
export const loadUser = () => (dispatch, getState) => {
    //User loading
    dispatch({ type: USER_LOADING });

    //Get token from localStorage
    const token = getState().auth.token;

    //Headers
    const config = {
        headers: {
            "Content-type": "application/json"
        }
    }

    //If token, add to headers
    if(token) {
        config.headers['x-auth-token'] = token;
    }
    axios.get('https://www.google.com', config)
        .then(res => dispatch({
            type: USER_LOADED,
            payload: res.data
        }))
        .catch(err => {
            dispatch(returnErrors(err.response.data, error.response.status));
            dispatch({
                type: AUTH_ERROR
            });
        });
}