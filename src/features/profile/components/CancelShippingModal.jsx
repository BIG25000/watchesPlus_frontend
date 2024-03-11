import React from "react";
import Button from "../../../components/Button";
import useProfile from "../../../hooks/useProfile";
import { toast } from "react-toastify";
import { useState } from "react";

export default function CancelShippingModal(props) {
  const { cancelShipping } = useProfile();
  const { index, setLoading } = props;
  const [input,setInput] = useState(null)
  const handleClick = async (e) => {
    try {
      e.preventDefault();
      const data = {
        issue : input.issue
      }
      setLoading(true);
      await cancelShipping(index,data);
      document.getElementById(`cancel_shipping_${index}`).close();
    } catch (err) {
      console.log(err);
      toast.error(err.response?.data.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <dialog id={`cancel_shipping_${index}`} className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg text-center mb-4">
          Are you sure to cancel this shipping
        </h3>
        <div className="flex items-center gap-4 justify-center">
          <label>Issue :</label>
          <input
            type="text"
            name="issue"
            placeholder="Please Type Your Issue"
            className="input input-bordered w-full max-w-xs"
            value={input?.issue}
            onChange={(e)=>setInput({
              ...input,
              [e.target.name] : e.target.value
            })}
          />
        </div>
        <div className="flex justify-evenly mt-8">
          <Button bg="green" color="white" onClick={handleClick}>
            Confirm
          </Button>
          <Button
            bg="red"
            onClick={() =>
              document.getElementById(`cancel_shipping_${index}`).close()
            }
          >
            Cancel
          </Button>
        </div>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
}
