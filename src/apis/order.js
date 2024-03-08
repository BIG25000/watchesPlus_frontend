import myAPI from "../config/myAPI";

export const getAllOrder = () => myAPI.get("/order/history")

export const cancelBuyOrder = (orderId) => myAPI.patch(`/order/buy/${orderId}`)
export const cancelSaleOrder = (orderId) => myAPI.patch(`/order/sale/${orderId}`)