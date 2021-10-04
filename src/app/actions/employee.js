export const RECEIVE_EMPLOYEE_SUCCESS = 'RECEIVE_EMPLOYEE_SUCCESS';
export const RECEIVE_EMPLOYEE_FAILURE = 'RECEIVE_EMPLOYEE_FAILURE';
export const DELETE_EMPLOYEE_START = 'DELETE_EMPLOYEE_START';
export const DELETE_EMPLOYEE_SUCCESS = 'DELETE_EMPLOYEE_SUCCESS';
export const DELETE_EMPLOYEE_FAILURE = 'DELETE_EMPLOYEE_FAILURE';
export const ADD_EMPLOYEE_START = 'ADD_EMPLOYEE_START';
export const ADD_EMPLOYEE_SUCCESS = 'ADD_EMPLOYEE_SUCCESS';
export const ADD_EMPLOYEE_FAILURE = 'ADD_EMPLOYEE_FAILURE';
export const EDIT_EMPLOYEE_START = 'EDIT_EMPLOYEE_START';
export const EDIT_EMPLOYEE_SUCCESS = 'EDIT_EMPLOYEE_SUCCESS';
export const EDIT_EMPLOYEE_FAILURE = 'EDIT_EMPLOYEE_FAILURE';


export const receiveEmployeeSuccess = res => {
    return {
        type: RECEIVE_EMPLOYEE_SUCCESS,
        payload: res
    };
};

export const receiveEmployeeFailure = () => {
    return {
        type: RECEIVE_EMPLOYEE_FAILURE
    };
};

export const deleteEmployeeStart = () => {
    return {
        type: DELETE_EMPLOYEE_START
    };
};

export const deleteEmployeeSuccess = (successMessage) => {
    return {
        type: DELETE_EMPLOYEE_SUCCESS,
        successMessage
    };
};

export const deleteEmployeeFailure = (errorMessage) => {
    return {
        type: DELETE_EMPLOYEE_FAILURE,
        errorMessage
    };
};

export const addEmployeeStart = () => {
    return {
        type: ADD_EMPLOYEE_START
    };
};

export const addEmployeeSuccess = (successMessage) => {
    return {
        type: ADD_EMPLOYEE_SUCCESS,
        successMessage
    };
};

export const addEmployeeFailure = (errorMessage) => {
    return {
        type: ADD_EMPLOYEE_FAILURE,
        errorMessage
    };
};

export const editEmployeeStart = () => {
    return {
        type: EDIT_EMPLOYEE_START
    };
};

export const editEmployeeSuccess = (successMessage) => {
    return {
        type: EDIT_EMPLOYEE_SUCCESS,
        successMessage
    };
};

export const editEmployeeFailure = (errorMessage) => {
    return {
        type: EDIT_EMPLOYEE_FAILURE,
        errorMessage
    };
};
