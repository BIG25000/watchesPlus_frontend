const ACCESS_TOKEN = "ACCESS_TOKEN";

// MyApp Token
export const setToken = (token) => localStorage.setItem(ACCESS_TOKEN, token);
export const getToken = () => localStorage.getItem(ACCESS_TOKEN);
export const removeToken = () => localStorage.removeItem(ACCESS_TOKEN);
