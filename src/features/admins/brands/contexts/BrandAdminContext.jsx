import React from "react";
import { createContext } from "react";
import * as brandApi from "../../../../apis/admins/brand";
import { useEffect } from "react";
import { useState } from "react";

export const BrandAdminContext = createContext();

function BrandAdminContextProvider({ children }) {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    brandApi
      .getAllBrand()
      .then((res) => setBrands(res.data.data))
      .catch((err) => console.log(err));
  }, []);

  const createBrand = async (name) => {
    try {
      await brandApi.createBrand(name);
    } catch (error) {
      console.log(error);
    }
  };

  const editBrand = async (name, id) => {
    try {
      await brandApi.editBrand(name, id);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteBrand = async (id) => {
    try {
      await brandApi.deleteBrand(id);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <BrandAdminContext.Provider
      value={{ brands, createBrand, editBrand, deleteBrand }}
    >
      {children}
    </BrandAdminContext.Provider>
  );
}

export default BrandAdminContextProvider;
