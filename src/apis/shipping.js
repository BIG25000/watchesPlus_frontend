import myAPI from "../config/myAPI";

export const getAllShipping = () => myAPI.get('/shipping/all')
export const confirmShippingByUser = (shippingId) => myAPI.patch(`/shipping/confirm/${shippingId}`)
export const cancelShippingByUser = (shippingId,body) => myAPI.patch(`/shipping/cancel/${shippingId}`,body)