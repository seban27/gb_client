import {
    receiveEmployeeSuccess,
    receiveEmployeeFailure,
    deleteEmployeeStart,
    deleteEmployeeSuccess,
    deleteEmployeeFailure,
    addEmployeeStart,
    addEmployeeSuccess,
    addEmployeeFailure,
    editEmployeeStart,
    editEmployeeSuccess,
    editEmployeeFailure
} from '../../actions/employee';
import { EMPLOYEE } from '../../utils/apiUrl';
import request from '../../utils/request';

/**
 * Get employees
 * @returns
 */
export const getEmployees = params => {
    return dispatch => {
        // Call API here
        request
            .get(EMPLOYEE.GETALL, params)
            .then(response => {
                if (!response.data.error) {
                    if (response.data.message && response.data.data) {
                        return dispatch(
                            receiveEmployeeSuccess({ response: response.data.data })
                        );
                    }
                }
            })
            .catch(error => {
                return dispatch(
                    receiveEmployeeFailure()
                );
            });
    };
};

/**
 * Delete employee
 * @returns
 */
export const deleteEmployee = params => {
    return dispatch => {
        dispatch(deleteEmployeeStart());
        // Call API here
        request
            .del(EMPLOYEE.DELETE, params.id)
            .then(response => {
                if (!response.data.error) {
                    if (response.data.message) {
                        return dispatch(
                            deleteEmployeeSuccess(response.data.message)
                        );
                    }
                }
                return dispatch(
                    deleteEmployeeFailure(response.data.message)
                );
            })
            .catch(error => {
                return dispatch(
                    deleteEmployeeFailure(error.reason)
                );
            });
    };
};

/**
 * Add employee
 * @returns
 */
export const addEmployee = params => {
    return dispatch => {
        dispatch(addEmployeeStart());
        // Call API here
        request
            .post(EMPLOYEE.ADD, params)
            .then(response => {
                if (!response.data.error) {
                    if (response.data.message) {
                        return dispatch(
                            addEmployeeSuccess(response.data.message)
                        );
                    }
                }
                return dispatch(
                    addEmployeeFailure(response.data.message)
                );
            })
            .catch(error => {
                return dispatch(
                    addEmployeeFailure(error.reason)
                );
            });
    };
};

/**
 * Edit employee
 * @returns
 */
export const editEmployee = params => {
    return dispatch => {
        dispatch(editEmployeeStart());
        // Call API here
        request
            .put(EMPLOYEE.EDIT+params.id, params)
            .then(response => {
                if (!response.data.error) {
                    if (response.data.message) {
                        return dispatch(
                            editEmployeeSuccess(response.data.message)
                        );
                    }
                }
                return dispatch(
                    editEmployeeFailure(response.data.message)
                );
            })
            .catch(error => {
                return dispatch(
                    editEmployeeFailure(error.reason)
                );
            });
    };
};
