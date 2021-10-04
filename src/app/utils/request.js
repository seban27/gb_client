import axiosInstance from './axiosInterceptor';

const get = (url, params, headers) => {
    return axiosInstance({
        method: 'GET',
        url: url,
        params: params,
        headers: headers
    });
};

const post = (url, params, headers) => {
    return axiosInstance({
        method: 'POST',
        url: url,
        data: params,
        headers: headers
    });
};

const put = (url, params, headers) => {
    return axiosInstance({
        method: 'PUT',
        url: url,
        data: params,
        headers: headers
    });
};

const del = (url, param, headers) => {
    return axiosInstance({
        method: 'DELETE',
        url: url + '/' + param,
        headers: headers
    });
};

export default {
    get,
    post,
    put,
    del
};
