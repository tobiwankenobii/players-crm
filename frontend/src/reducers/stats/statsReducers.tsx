import { Action } from 'redux';
import {
    STATS_GET_FAIL,
    STATS_GET_REQUEST,
    STATS_GET_SUCCESS,
} from '../../constants/statsConstants';

interface StatsAction extends Action {
    type: string;
    payload: object;
}

export const statsReducer = (state = {}, action: StatsAction) => {
    switch (action.type) {
        case STATS_GET_REQUEST:
            return { loading: true };
        case STATS_GET_SUCCESS:
            return { loading: false, stats: action.payload };
        case STATS_GET_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};
