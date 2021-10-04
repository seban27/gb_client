import axios from 'axios';
import Session from './Session';
import { BASEURL } from './apiUrl';

const axiosInstance = axios.create({
    baseURL: BASEURL,
    headers: {
        'content-type': 'application/json'
    },
    timeout: 1000 * 10 // Wait for 5 seconds
});

const requestHandler = request => {
    request.headers.Authorization = `Bearer ${Session.getToken()}`;

    return request;
};

const responseHandler = response => {
    if (response.status === 401) {
        Session.removeToken();
    }
    return response;
};

const errorHandler = error => {
    if (error.response != undefined) {
        if (error.response.status === 401 && Session.getToken()) {
            Session.removeToken();
        }
    }
    return Promise.reject(error);
};

axiosInstance.interceptors.request.use(
    request => requestHandler(request),
    error => errorHandler(error)
);

axiosInstance.interceptors.response.use(
    response => responseHandler(response),
    error => errorHandler(error)
);

export default axiosInstance;
