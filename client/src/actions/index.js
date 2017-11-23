import axios from 'axios';

import { LOGIN_USER } from './types'
import { GET_RESULTS } from './types'

export const loginUser = (data) => {
    return function(dispatch) {
        axios
            .post('/api/login', data)
            .then(res => dispatch({ type: LOGIN_USER, payload: res.data}));
    }
};

export const getResults = (data) => {
    return function(dispatch) {
        console.log("datapas" + data['destination']);
        axios
            .post('/api/results?destination=' + data['destination']+'&category=' + data['category'] , data)
            .then(res => dispatch({ type: GET_RESULTS, payload: res.data}));
    }
};