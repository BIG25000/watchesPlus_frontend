import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Button from "../../../components/Button";
import useProfile from "../../../hooks/useProfile";
import Loading from "../../../components/Loading";
import { toast } from "react-toastify";

export default function ShippingModal(props) {
  const { createAddress } = useProfile();
  const { getAddressFromInventoryId, updateAddressByAddressId } = useProfile();

  const { authUser, inventoryId, setLoading, referenceNumber, index , loading } = props;
  const [province, setProvince] = useState([]);
  const [district, setDistrict] = useState([]);
  const [subDistrict, setSubDistrict] = useState([]);
  const [editAddress, setEditAddress] = useState(null);
  const [input, setInput] = useState({
    province: "",
    district: "",
    subDistrict: "",
    zipCode: "",
  });

  const getDataAddress = async (inventoryId) => {
    const data = await getAddressFromInventoryId(inventoryId);
    setEditAddress(data);
  };
  useEffect(() => {
    (() => {
      fetch(
        "https://raw.githubusercontent.com/kongvut/thai-province-data/master/api_province_with_amphure_tambon.json"
      )
        .then((response) => response.json())
        .then((result) => {
          setProvince(() => result);
        });
    })();
    getDataAddress(index);
  }, [loading]);

  const handleProvince = (e) => {
    setInput((prev) => ({
      ...prev,
      province: e.target.value,
    }));
    const selectProvince = e.target.value;
    const newDistrict = province?.filter((e) => e["name_en"] == selectProvince);
    setDistrict(newDistrict[0]["amphure"]);
  };

  const handleDistrict = (e) => {
    setInput((prev) => ({ ...prev, district: e.target.value }));
    const selectDistrict = e.target.value;
    const newSubDistrict = district?.filter(
      (district) => district["name_en"] == selectDistrict
    );
    setSubDistrict(newSubDistrict[0]["tambon"]);
  };

  const handleSubDistrict = (e) => {
    const currentSubDistrict = subDistrict.find((sub) => {
      if (input.subDistrict) {
        return sub["name_en"] === input.subDistrict;
      } else {
        return sub["name_en"] === e.target.value;
      }
    });
    setInput((prev) => ({
      ...prev,
      subDistrict: currentSubDistrict["name_en"],
    }));
    const code = currentSubDistrict["zip_code"];
    setInput((prev) => ({
      ...prev,
      zipCode: String(code),
    }));
  };

  const handleSubmitAddress = async (e) => {
    try {
      e.preventDefault();
      const address = {
        inventoryId,
        referenceNumber,
        province: input.province,
        district: input.district,
        subDistrict: input.subDistrict,
        zipCode: input.zipCode,
      };
      setLoading(true);
      await createAddress(address);
      document.getElementById(`address_${index}`).close();
      setInput({
        province: "",
        district: "",
        subDistrict: "",
        zipCode: "",
      });
    } catch (err) {
      console.log(err);
      toast.error(err.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateAddress = async (e) => {
    try {
      e.preventDefault()
      const data = {
        province: input?.province,
        district: input?.district,
        subDistrict: input?.subDistrict,
        zipCode: input?.zipCode,
      };
      setLoading(true);
      await updateAddressByAddressId(editAddress.addressId, data);
      document.getElementById(`address_edit_${index}`).close();
      setInput({
        province: "",
        district: "",
        subDistrict: "",
        zipCode: "",
      });
    } catch (err) {
      console.log(err);
      toast.error(err.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {province && (
        <dialog id={`address_${index}`} className="modal">
          <div className="modal-box relative">
            <h3 className="font-bold text-lg  mb-8">
              Add Your Address To Shipping
            </h3>
            <div className="flex flex-col gap-8 ">
              <div
                className="absolute right-8 top-6 text-xl font-bold cursor-pointer"
                onClick={() => {
                  document.getElementById(`address_${index}`).close();
                }}
              >
                X
              </div>
              <div className="flex gap-4 items-center justify-between">
                <label>Province : </label>
                <select
                  className="select w-full max-w-xs"
                  onChange={handleProvince}
                  name="province"
                  value={input?.province}
                >
                  <option disabled defaultValue="" value="">
                    Select Province....
                  </option>
                  {province?.map((e) => {
                    return (
                      <option key={e.id} value={e["name_en"]}>
                        {e["name_en"]}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="flex gap-4 items-center justify-between">
                <label>District : </label>
                <select
                  className="select w-full max-w-xs"
                  name="district"
                  value={input?.district}
                  onChange={handleDistrict}
                  disabled={input?.province ? false : true}
                >
                  <option disabled defaultValue="" value="">
                    Select District....
                  </option>
                  {district?.map((e) => {
                    return (
                      <option key={e.id} value={e.name_en}>
                        {e.name_en}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="flex gap-4 items-center justify-between">
                <label>Sub District : </label>
                <select
                  className="select w-full max-w-xs"
                  name="subDistrict"
                  disabled={input?.district ? false : true}
                  value={input?.subDistrict}
                  onChange={handleSubDistrict}
                >
                  <option disabled defaultValue="" value="">
                    Select Sub District....
                  </option>
                  {subDistrict?.map((e) => {
                    return (
                      <option key={e.id} value={e.name_en}>
                        {e.name_en}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="flex gap-4 items-center justify-between">
                <label>Post Code : </label>
                <input
                  className="input input-bordered w-full max-w-xs"
                  type="text"
                  disabled
                  value={input?.zipCode}
                />
              </div>
              <div className="flex gap-4 items-center justify-between">
                <label>Contact Name : </label>
                <input
                  className="input input-bordered w-full max-w-xs"
                  type="text"
                  disabled
                  value={authUser.firstName + " " + authUser.lastName}
                />
                {/* <div className="w-[320px] px-4">{authUser.firstName + ' ' + authUser.lastName}</div> */}
              </div>
              <div className="flex gap-4 items-center justify-between">
                <label>Contact Number : </label>
                <input
                  className="input input-bordered w-full max-w-xs"
                  type="text"
                  disabled
                  value={authUser.mobile || "-"}
                />
              </div>
              <Button bg="green" color="white" onClick={handleSubmitAddress}>
                Confirm
              </Button>
            </div>
          </div>
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>
      )}
      {editAddress && (
        <dialog id={`address_edit_${index}`} className="modal">
          <div className="modal-box relative">
            <h3 className="font-bold text-lg  mb-8">Edit Your Address</h3>
            <div className="flex flex-col gap-8 ">
              <div
                className="absolute right-8 top-6 text-xl font-bold cursor-pointer"
                onClick={() => {
                  document.getElementById(`address_edit_${index}`).close();
                }}
              >
                X
              </div>
              <div className="flex gap-4 items-center justify-between">
                <label>Province : </label>
                <select
                  className="select w-full max-w-xs"
                  onChange={handleProvince}
                  name="province"
                  value={input?.province || editAddress.address.province}
                >
                  <option disabled defaultValue="" value="">
                    Select Province....
                  </option>
                  {province?.map((e) => {
                    return (
                      <option key={e.id} value={e["name_en"]}>
                        {e["name_en"]}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="flex gap-4 items-center justify-between">
                <label>District : </label>
                <select
                  className="select w-full max-w-xs"
                  name="district"
                  value={input?.district || editAddress.address.district}
                  onChange={handleDistrict}
                  disabled={input?.province ? false : true}
                >
                  <option
                    disabled
                    defaultValue=""
                    value={editAddress.address.district}
                  >
                    {editAddress.address.district}
                  </option>
                  {district?.map((e) => {
                    return (
                      <option key={e.id} value={e.name_en}>
                        {e.name_en}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="flex gap-4 items-center justify-between">
                <label>Sub District : </label>
                <select
                  className="select w-full max-w-xs"
                  name="subDistrict"
                  disabled={input?.district ? false : true}
                  value={input?.subDistrict || editAddress.address.subDistrict}
                  onChange={handleSubDistrict}
                >
                  <option
                    disabled
                    defaultValue=""
                    value={editAddress.address.subDistrict}
                  >
                    {editAddress.address.subDistrict}
                  </option>
                  {subDistrict?.map((e) => {
                    return (
                      <option key={e.id} value={e.name_en}>
                        {e.name_en}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="flex gap-4 items-center justify-between">
                <label>Post Code : </label>
                <input
                  className="input input-bordered w-full max-w-xs"
                  type="text"
                  disabled
                  value={input?.zipCode || editAddress.address.zipCode}
                />
              </div>
              <div className="flex gap-4 items-center justify-between">
                <label>Contact Name : </label>
                <input
                  className="input input-bordered w-full max-w-xs"
                  type="text"
                  disabled
                  value={authUser.firstName + " " + authUser.lastName}
                />
                {/* <div className="w-[320px] px-4">{authUser.firstName + ' ' + authUser.lastName}</div> */}
              </div>
              <div className="flex gap-4 items-center justify-between">
                <label>Contact Number : </label>
                <input
                  className="input input-bordered w-full max-w-xs"
                  type="text"
                  disabled
                  value={authUser.mobile || "-"}
                />
              </div>
              <Button bg="green" color="white" onClick={handleUpdateAddress}>
                Confirm
              </Button>
            </div>
          </div>
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>
      )}
    </>
  );
}
