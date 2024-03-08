import myAPI from "../config/myAPI";

export const getAllOrderOnWatch = (watchId) => myAPI.get(`/order/${watchId}`)
export const placeBuyOrder = (body) => myAPI.post('/order/buy',body)
export const placeSaleOrder = (body) => myAPI.post('/order/sale',body)