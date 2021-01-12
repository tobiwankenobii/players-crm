import { Dispatch } from 'redux';
import {
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,
    USER_LOGOUT,
} from '../../constants/authConstants';
import { apiService } from '../../services/apiService';

export const login = (username: string, password: string) => async (
    dispatch: Dispatch
) => {
    try {
        dispatch({ type: USER_LOGIN_REQUEST });

        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
            port: 8080,
        };

        const { data } = await apiService.post(
            '/api/token/',
            { username, password },
            config
        );

        dispatch({ type: USER_LOGIN_SUCCESS, payload: data });

        localStorage.setItem('userInfo', JSON.stringify(data));
    } catch (error) {
        console.log(error.response);
        dispatch({
            type: USER_LOGIN_FAIL,
            payload:
                error.response.data.message ||
                error.response.statusText ||
                error.response,
        });
    }
};

export const logout = () => (dispatch: Dispatch) => {
    localStorage.removeItem('userInfo');
    dispatch({ type: USER_LOGOUT });
};
