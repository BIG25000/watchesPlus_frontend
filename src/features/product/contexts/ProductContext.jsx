import { useState } from "react";
import { createContext } from "react";
import { allWatches, getWatchById } from "../../../apis/watches";
import { getAllOrderOnWatch, placeBuyOrder, placeSaleOrder } from "../../../apis/order";
import { getAllHistory} from '../../../apis/history'
import { useEffect } from "react";
import { toast } from "react-toastify";

export const ProductContext = createContext();

const ProductContextProvider = ({ children }) => {
  const [dataWatch, setDataWatch] = useState([]);

  const getWatch = async () => {
    const { data } = await allWatches();
    setDataWatch(data);
  };

  const getOneWatch = async (watchId) => {
    try {
      const { data } = await getWatchById(watchId);
      return data;
    } catch (err) {
      console.log(err);
    }
  };

  const getAllOrderOnTransaction = async (watchId) => {
    try {
      const { data } = await getAllOrderOnWatch(watchId);
      return data;
    } catch (err) {
      console.log(err);
    }
  };

  const sendBuyOrder = async (body) => {
    try {
      const res = await placeBuyOrder(body);
      toast.success(res.data.message);
      return data;
    } catch (err) {
      console.log(err);
      toast.error(err.response?.data?.message)
    }
  };

  const sendSaleOrder = async (body) => {
    try {
      const res = await placeSaleOrder(body)
      toast.success(res.data.message)
    } catch (err) {
      console.log(err);
      toast.error(err.response.data.messagee)
    }
  };

  const getAllHistoryByWatchId = async (watchId) => {
    try{
      const {data} = await getAllHistory(watchId)
      return data
    }catch(err){
      console.log(err)
    }
  }

  useEffect(() => {
    getWatch();
    // getOneWatch();
  }, []);

  return (
    <ProductContext.Provider
      value={{ dataWatch, getOneWatch, getAllOrderOnTransaction, sendBuyOrder ,sendSaleOrder , getAllHistoryByWatchId }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
