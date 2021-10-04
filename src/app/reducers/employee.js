import {
    RECEIVE_EMPLOYEE_SUCCESS,
    RECEIVE_EMPLOYEE_FAILURE,
    DELETE_EMPLOYEE_START,
    DELETE_EMPLOYEE_SUCCESS,
    DELETE_EMPLOYEE_FAILURE,
    ADD_EMPLOYEE_START,
    ADD_EMPLOYEE_SUCCESS,
    ADD_EMPLOYEE_FAILURE,
    EDIT_EMPLOYEE_START,
    EDIT_EMPLOYEE_SUCCESS,
    EDIT_EMPLOYEE_FAILURE
} from '../actions/employee';

// Initial state
const initialState = {
    response: {employees: [], query: {}}
};

export const employeeReducer = (state = initialState, action) => {
    switch (action.type) {
        case RECEIVE_EMPLOYEE_SUCCESS:
            return {
                ...state,
                response: action.payload.response,
            };

        case RECEIVE_EMPLOYEE_FAILURE:
            return {
                ...state,
                response: {employees: [], query: {}}
            };
        
        case DELETE_EMPLOYEE_START:
            return {
                ...state,
                loading: true,
                successMessage: '',
                errorMessage: ''
            };

        case DELETE_EMPLOYEE_SUCCESS:
            return {
                ...state,
                loading: false,
                successMessage: action.successMessage,
                errorMessage: ''
            };

        case DELETE_EMPLOYEE_FAILURE:
            return {
                ...state,
                loading: false,
                successMessage: '',
                errorMessage: action.errorMessage
            };
        
        case ADD_EMPLOYEE_START:
            return {
                ...state,
                loading: true,
                successMessage: '',
                errorMessage: ''
            };

        case ADD_EMPLOYEE_SUCCESS:
            return {
                ...state,
                loading: false,
                successMessage: action.successMessage,
                errorMessage: ''
            };

        case ADD_EMPLOYEE_FAILURE:
            return {
                ...state,
                loading: false,
                successMessage: '',
                errorMessage: action.errorMessage
            };

        case EDIT_EMPLOYEE_START:
            return {
                ...state,
                loading: true,
                successMessage: '',
                errorMessage: ''
            };

        case EDIT_EMPLOYEE_SUCCESS:
            return {
                ...state,
                loading: false,
                successMessage: action.successMessage,
                errorMessage: ''
            };

        case EDIT_EMPLOYEE_FAILURE:
            return {
                ...state,
                loading: false,
                successMessage: '',
                errorMessage: action.errorMessage
            };
    }
    return state;
};
