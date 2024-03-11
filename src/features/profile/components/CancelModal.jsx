import React from "react";
import Button from "../../../components/Button";
import { toast } from "react-toastify";
import useProfile from "../../../hooks/useProfile";

export default function CancelModal(props) {
    const { inventoryId , setLoading } = props
    const { cancelShippingBeforeAdmin  } = useProfile()
    const handleCancelShipping = async (e) => {
        try{
            e.preventDefault()
            const data = {
                inventoryId,
            }
            setLoading(true)
            await cancelShippingBeforeAdmin(data)
            document.getElementById("cancel").close()
        }catch(err){
            console.log(err)
            toast.error(err.response?.data?.message)
            document.getElementById("cancel").close()
        }finally{
            setLoading(false)
        }
    }
  return (
    <dialog id="cancel" className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg text-center mb-4">Are you sure to cancel Shipping ?</h3>
        <h3 className=" text-lg text-center">Your Watch will be return To Your Inventory </h3>
        <div className="flex justify-evenly mt-8">
            <Button bg='green' color='white' onClick={handleCancelShipping}>Confirm</Button>
            <Button bg='red' onClick={()=>document.getElementById("cancel").close()} >Cancel</Button>
        </div>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
}
