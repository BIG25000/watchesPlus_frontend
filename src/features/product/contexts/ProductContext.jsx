import { useState } from "react";
import { createContext } from "react";
import { allWatches, getWatchById } from "../../../apis/watches";
import { useEffect } from "react";

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
      return data
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getWatch();
    // getOneWatch();
  }, []);
  return (
    <ProductContext.Provider value={{  dataWatch , getOneWatch   }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
