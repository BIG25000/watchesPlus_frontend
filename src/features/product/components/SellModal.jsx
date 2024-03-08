import React from "react";
import { baht } from "../../../constants/baht";
import InventoryList from "./InventoryList";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useProfile from "../../../hooks/useProfile";
import Button from "../../../components/Button";
import useProduct from "../../../hooks/useProduct";
import { validateSaleOrder } from "../validations/validate-order";
import { toast } from "react-toastify";

export default function SellModal(props) {
  const { watchId } = useParams();
  const { watch, dataSale , setLoading  } = props;
  const [watchAvailable, setWatchAvailable] = useState([]);
  const [input, setInput] = useState(null);
  const { watchToSell } = useProfile();
  const { sendSaleOrder } = useProduct();

  const handleClick = async (e) => {
    e.preventDefault();
    //  setPrice(()=> 0)
    document.getElementById("confirm_sell").showModal();
  };

  const handleSaleOrder = async (e) => {
    try{
      e.preventDefault();
      if (input.price === 0 && !input.inventoryId) {
        toast.error("Please Select Inventory And Insert Price");
        return;
      }
      const data = {
        inventoryId : input.inventoryId,
        price : input.price
      }
      const validateErr = validateSaleOrder(data)
      if(validateErr?.price){
        toast.error(validateErr.price)
        return
      }
      setLoading(true)
      await sendSaleOrder(input);
     
      setInput(null);
      document.getElementById("confirm_sell").close();
      document.getElementById("sell").close();
    }catch(err){
      console.log(err)
      toast.error(err.response?.data?.message)
    }finally{
    setLoading(false)
    }
  };

  const getData = async () => {
    const inventory = await watchToSell(+watchId);
    setWatchAvailable(inventory.data);
  };

  const handleChange = (e) => {
    let value = e.target.value;
    if (value.length === 1 && value === "0") {
      e.target.value = "";
      return;
    }
    value = value.replace(/^-/, ""); // ลบเครื่องหมายลบที่อยู่ด้านหน้า
    e.target.value = value.replace(/\D/g, ""); // ลบทุกอย่างนอกจากตัวเลข
    if (e.target.value > 1_000_000) {
      e.target.value = 1000000;
    }
    setInput((prev) => ({
      ...prev,
      [e.target.name]: +e.target.value,
    }));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <dialog id="sell" className="modal">
        <div className="modal-box flex flex-col gap-6 min-h-96  max-w-4xl relative">
          <div
            className="absolute right-5 top-3 text-xl font-bold cursor-pointer"
            onClick={() => document.getElementById("sell").close()}
          >
            X
          </div>
          <h3 className="font-bold text-lg ">Sell - {watch?.modelName}</h3>
          <div className="flex flex-col gap-4 text-start">
            <h1>My Inventory</h1>
            {watchAvailable?.length > 0 ? (
              watchAvailable.map((e) => {
                return (
                  <InventoryList
                    key={e.id}
                    watch={watch}
                    id={e.id}
                    setInput={setInput}
                  />
                );
              })
            ) : (
              <p>You dont have this Item</p>
            )}
          </div>
          <div className="grid grid-cols-2 ">
            <div className="w-36  flex gap-8"></div>
            <div className="flex flex-col gap-4">
              <div className="flex h-8 gap-4 justify-between">
                <label>What price do you want to pay:</label>
                <div className="flex gap-2">
                  <input
                    className="w-24 text-end p-2 outline outline-2 outline-offset-2 rounded-md"
                    type="text"
                    name="price"
                    inputMode="numeric"
                    pattern="[1-9][0-9]*"
                    min={0}
                    max={1000000}
                    onChange={handleChange}
                  />

                  {baht}
                </div>
              </div>
              <div className="flex h-8 gap-4 justify-between">
                <label>Minimum Price:</label>
                <div className="flex gap-2">
                  <div>{dataSale?.[0]?.price}</div>
                  {baht}
                </div>
              </div>
              <div className="flex h-8 gap-4 justify-between">
                <label>Total Price:</label>
                <div className="flex gap-2">
                  <div>{input?.price}</div>
                  {baht}
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-end">
            <Button
              type="button"
              color="white"
              bg="green"
              onClick={handleClick}
            >
              PLACE ORDER
            </Button>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
      <dialog id="confirm_sell" className="modal">
        <div className="modal-box">
          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-lg">Are You Confirm This Order ?</h3>
            <div>
              You Order is place on Market at Price{" "}
              <span className="font-bold text-lg">{input?.price || 0}</span>{" "}
              {baht}
            </div>
            <div className="mt-4 flex justify-evenly">
              <Button bg="green" onClick={handleSaleOrder}>
                YES
              </Button>
              <Button
                bg="red"
                onClick={() => document.getElementById("confirm_sell").close()}
              >
                NO
              </Button>
            </div>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}
