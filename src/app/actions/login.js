export const LOGIN_CHECK_START = 'LOGIN_CHECK_START';
export const LOGIN_CHECK_SUCCESS = 'LOGIN_CHECK_SUCCESS';
export const LOGIN_CHECK_FAILURE = 'LOGIN_CHECK_FAILURE';
export const REGISTER_START = 'REGISTER_START';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';
export const LOGOUT = 'LOGOUT';

export const loginCheckStart = () => {
    return {
        type: LOGIN_CHECK_START
    };
};

export const loginCheckSuccess = res => {
    return {
        type: LOGIN_CHECK_SUCCESS,
        payload: res
    };
};

export const loginCheckFailure = (res, errorMessage) => {
    return {
        type: LOGIN_CHECK_FAILURE,
        payload: res,
        error: errorMessage
    };
};

export const registerStart = () => {
    return {
        type: REGISTER_START
    };
};

export const registerSuccess = res => {
    return {
        type: REGISTER_SUCCESS,
        payload: res
    };
};

export const registerFailure = (res, errorMessage) => {
    return {
        type: REGISTER_FAILURE,
        payload: res,
        error: errorMessage
    };
};

export const logout = () => {
    return {
        type: LOGOUT
    };
};
