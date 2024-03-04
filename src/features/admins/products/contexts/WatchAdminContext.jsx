import React from "react";
import * as watchApi from "../../../../apis/admins/watch";
import { useState } from "react";
import { createContext } from "react";
import { useEffect } from "react";

export const WatchAdminContext = createContext();

function WatchAdminContextProvider({ children }) {
  const [watches, setWatches] = useState([]);

  useEffect(() => {
    watchApi
      .getAllWatch()
      .then((res) => setWatches(res.data.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <WatchAdminContext.Provider value={{ watches }}>
      {children}
    </WatchAdminContext.Provider>
  );
}

export default WatchAdminContextProvider;
