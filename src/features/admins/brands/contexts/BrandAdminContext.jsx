import React from "react";
import { createContext } from "react";
import * as brandApi from "../../../../apis/admins/brand";
import { useEffect } from "react";
import { useState } from "react";
import { toast } from "react-toastify";

export const BrandAdminContext = createContext();

function BrandAdminContextProvider({ children }) {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    brandApi
      .getAllBrand()
      .then((res) => setBrands(res.data.data))
      .catch((err) => console.log(err));
  }, []);

  const createBrand = async (formData) => {
    try {
      const result = await brandApi.createBrand(formData);
      setBrands((res) => [...res, result.data.data]); // ท่าไอฮั่นนนนทามายัง
      toast.success("create brand success");
    } catch (error) {
      console.log(error);
    }
  };

  const editBrand = async (formData, id) => {
    try {
      await brandApi.editBrand(formData, id);
      const res = await brandApi.getAllBrand();
      setBrands(res.data.data); // ท่าโอม
      toast.success("edit brand success");
    } catch (error) {
      console.log(error);
    }
  };

  const deleteBrand = async (id) => {
    try {
      await brandApi.deleteBrand(id);
      const res = await brandApi.getAllBrand();
      setBrands(res.data.data);
      toast.success("delete brand success");
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
