import Button from "../../../components/Button";
import { baht } from "../../../constants/baht";
import { useState } from "react";
import useProfile from "../../../hooks/useProfile";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import useProduct from "../../../hooks/useProduct";
import { validateBuyOrder } from "../validations/validate-order";
import { formatNum } from "../../../utils/formatNumber";

export default function BuyModal(props) {
  const { watchId } = useParams();
  const { watch, dataBuy, setLoading, loading } = props;
  const { profileInfo } = useProfile();
  const { sendBuyOrder } = useProduct();
  const [price, setPrice] = useState(0);
  const handleClick = async (e) => {
    e.preventDefault();
    document.getElementById("confirm_buy").showModal();
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
    setPrice(+e.target.value);
  };

  const handleBuyOrder = async (e) => {
    try {
      e.preventDefault();
      if (profileInfo.wallet.amount < price) {
        toast.error("Your Amount Is not Enough");
        document.getElementById("confirm_buy").close();
        document.getElementById("buy").close();
        return;
      }
      const data = {
        watchId: +watchId,
        walletId: profileInfo.wallet.id,
        price: price || 0,
      };

      const validateErr = validateBuyOrder(data);
      console.log(validateErr);
      if (validateErr?.price) {
        toast.error(validateErr.price);
        return;
      }
      setLoading(true);
      await sendBuyOrder(data);

      setPrice(0);
      document.getElementById("confirm_buy").close();
      document.getElementById("buy").close();
    } catch (err) {
      console.log(err);
      toast.error(err.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <dialog id="buy" className="modal">
        <div className="modal-box flex flex-col gap-6 min-h-96  max-w-4xl relative ">
          <div
            className="absolute right-5 top-3 text-xl font-bold cursor-pointer"
            onClick={() => {
              document.getElementById("buy").close();
              setPrice(0);
            }}
          >
            X
          </div>
          <h3 className="font-bold text-lg pb-8">Buy - {watch?.modelName}</h3>
          <div className="grid grid-cols-2">
            <div className="w-36  flex gap-8">
              <img src={watch?.watchImage} />
              <div className="text-sm min-w-40 text-start flex flex-col gap-5 font-bold">
                <p>{watch?.modelName}</p>
                <p>{watch?.brand}</p>
                <p>{watch?.description}</p>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex h-8 gap-4 justify-between">
                <label>What price do you want to pay:</label>
                <div className="flex gap-2">
                  <input
                    className="w-24 text-end p-2 outline outline-2 outline-offset-2 rounded-md"
                    type="text"
                    inputMode="numeric"
                    pattern="[1-9][0-9]*"
                    min={0}
                    max={1000000}
                    onChange={handleChange}
                    value={formatNum(price)}
                  />

                  {baht}
                </div>
              </div>
              <div className="flex h-8 gap-4 justify-between">
                <label>Minimum Price:</label>
                <div className="flex gap-2">
                  <div>{formatNum(dataBuy?.[0]?.price) || 0}</div>
                  {baht}
                </div>
              </div>
              <div className="flex h-8 gap-4 justify-between">
                <label>Total Price:</label>
                <div>
                  <input
                    disabled
                    className="w-24 text-end p-2"
                    value={formatNum(price)}
                  />
                  {baht}
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-end">
            <Button type="button" color="white" bg="cyan" onClick={handleClick}>
              PLACE ORDER
            </Button>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button onClick={() => setPrice(0)}>close</button>
        </form>
      </dialog>
      <dialog id="confirm_buy" className="modal">
        <div className="modal-box">
          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-lg">Are You Confirm This Order ?</h3>
            <div>
              You Order is place on Market at Price{" "}
              <span className="font-bold text-lg">{formatNum(price) || 0}</span>{" "}
              {baht}
            </div>
            <div className="mt-4 flex justify-evenly">
              <Button bg="cyan" onClick={handleBuyOrder} color="white">
                YES
              </Button>
              <Button
                bg="scarlet"
                color="white"
                onClick={() => document.getElementById("confirm_buy").close()}
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
