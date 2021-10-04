import {
    LOGIN_CHECK_START,
    LOGIN_CHECK_SUCCESS,
    LOGIN_CHECK_FAILURE,
    REGISTER_START,
    REGISTER_SUCCESS,
    REGISTER_FAILURE,
    LOGOUT
} from '../actions/login';

// Initial state
const initialState = {};

export const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_CHECK_START:
            return {
                ...state,
                response: {},
                isLoggedIn: false,
                loading: true,
                errorMessage: ''
            };

        case LOGIN_CHECK_SUCCESS:
            return {
                ...state,
                response: action.payload.response,
                isLoggedIn: true,
                loading: false,
                errorMessage: ''
            };

        case LOGIN_CHECK_FAILURE:
            return {
                ...state,
                response: {},
                isLoggedIn: false,
                loading: false,
                errorMessage: action.payload.errorMessage
            };

        case REGISTER_START:
            return {
                ...state,
                responseSignup: {},
                loadingSignup: true,
                errorMessageSignup: '',
                successMessageSignup: ''
            };

        case REGISTER_SUCCESS:
            return {
                ...state,
                responseSignup: action.payload.response,
                loadingSignup: false,
                errorMessageSignup: '',
                successMessageSignup: action.payload.message
            };

        case REGISTER_FAILURE:
            return {
                ...state,
                responseSignup: {},
                loadingSignup: false,
                errorMessageSignup: action.payload.errorMessage,
                successMessageSignup: ''
            };

        case LOGOUT:
            return {
                ...state,
                response: {},
                isLoggedIn: false,
                loading: false,
                errorMessage: ''
            };
    }
    return state;
};
