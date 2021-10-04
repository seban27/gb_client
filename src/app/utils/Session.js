export const setToken = value => {
    localStorage.setItem("auth_token", value);
};
export const getToken = () => {
    return localStorage.getItem("auth_token");
};
export const clearAll = () => {
    localStorage.clear();
};

const Session = {
    setToken,
    getToken,
    clearAll
};

export default Session;
