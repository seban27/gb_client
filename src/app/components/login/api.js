import {
    loginCheckStart,
    loginCheckSuccess,
    loginCheckFailure,
    registerStart,
    registerSuccess,
    registerFailure
} from '../../actions/login';
import { AUTH } from '../../utils/apiUrl';
import request from '../../utils/request';
import Session from '../../utils/Session';

/**
 * Login user
 * @returns
 */
export const checkLogin = params => {
    return dispatch => {
        dispatch(loginCheckStart());
        // Call API here
        request
            .post(AUTH.LOGIN, params)
            .then(response => {
                if (!response.data.error) {
                    if (response.data.message && response.data.data) {
                        Session.setToken(response.data.data.token);
                        return dispatch(
                            loginCheckSuccess({ response: response.data.data })
                        );
                    }
                }
                return dispatch(
                    loginCheckFailure({
                        response: {},
                        errorMessage: response.data.message
                    })
                );
            })
            .catch(error => {
                return dispatch(
                    loginCheckFailure({
                        response: {},
                        errorMessage: error.reason
                    })
                );
            });
    };
};

/**
 * Register user
 * @returns
 */
export const registerUser = params => {
    return dispatch => {
        dispatch(registerStart());
        // Call API here
        request
            .post(AUTH.SIGNUP, params)
            .then(response => {
                if (!response.data.error) {
                    if (response.data.message && response.data.data) {
                        return dispatch(
                            registerSuccess({ response: response.data.data, message: response.data.message })
                        );
                    }
                }
                return dispatch(
                    registerFailure({
                        response: {},
                        errorMessage: response.data.message
                    })
                );
            })
            .catch(error => {
                return dispatch(
                    registerFailure({
                        response: {},
                        errorMessage: error.reason
                    })
                );
            });
    };
};
