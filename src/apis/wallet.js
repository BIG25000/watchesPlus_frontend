import myAPI from "../config/myAPI";

export const getWallet = () => myAPI.get("/wallet");

export const topUp = (token) => myAPI.post("/wallet/top-up", token);

export const withdraw = (amount) => myAPI.post("/wallet/withdraw", amount);

export const getWalletTransaction = () => myAPI.get("/wallet/transaction");
