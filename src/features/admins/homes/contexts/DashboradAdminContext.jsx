import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import * as dashboardAdminApi from "../../../../apis/admins/dashboard";

// getDashboardAdmin
export const DashboradAdminContext = createContext();

function DashboradAdminContextProvider({ children }) {
  const [dashboard, setDashboard] = useState([]);

  useEffect(() => {
    dashboardAdminApi
      .getDashboardAdmin()
      .then((res) => setDashboard(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <DashboradAdminContext.Provider value={{ dashboard }}>
      {children}
    </DashboradAdminContext.Provider>
  );
}

export default DashboradAdminContextProvider;
