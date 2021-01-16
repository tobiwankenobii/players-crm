import { Dispatch } from 'redux';
import {
    STATS_GET_FAIL,
    STATS_GET_REQUEST,
    STATS_GET_SUCCESS,
} from '../../constants/statsConstants';
import { apiService } from '../../services/apiService';

export const getStats = () => async (dispatch: Dispatch) => {
    try {
        dispatch({ type: STATS_GET_REQUEST });

        const { data } = await apiService().get('/api/daily_stats/');

        dispatch({ type: STATS_GET_SUCCESS, payload: data });
    } catch (error) {
        dispatch({
            type: STATS_GET_FAIL,
            payload:
                error.response.data.detail ||
                error.response.statusText ||
                error.response,
        });
    }
};
