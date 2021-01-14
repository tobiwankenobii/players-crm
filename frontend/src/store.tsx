import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { userLoginReducer } from './reducers/auth/userReducers';

// * Reducers
const reducer = combineReducers({
    userLogin: userLoginReducer,
});

// * Cached Values
const _cachedUserInfo = localStorage.getItem('userInfo');
const userInfoFromStorage = _cachedUserInfo
    ? JSON.parse(_cachedUserInfo)
    : null;

// * Initial State
interface UserInfo {
    username: string;
    refresh: string;
    access: string;
}
export interface State {
    userLogin: { userInfo: UserInfo; error: any };
}

const initialState: State = {
    userLogin: { userInfo: userInfoFromStorage, error: null },
};

// * Middleware
const middleware = [thunk];

// * Store
const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
