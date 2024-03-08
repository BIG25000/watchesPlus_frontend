import myAPI from "../config/myAPI";

export const getAllOrderOnWatch = (watchId) => myAPI.get(`/order/${watchId}`)
export const placeBuyOrder = (body) => myAPI.post('/order/buy',body)
export const placeSaleOrder = (body) => myAPI.post('/order/sale',body)


export const getAllOrder = () => myAPI.get("/order/history")

export const cancelBuyOrder = (orderId) => myAPI.patch(`/order/buy/${orderId}`)
export const cancelSaleOrder = (orderId) => myAPI.patch(`/order/sale/${orderId}`)