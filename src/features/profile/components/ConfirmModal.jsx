import { toast } from "react-toastify";
import Button from "../../../components/Button";
import useProfile from "../../../hooks/useProfile";

export default function ConfirmModal(props) {
    const { setLoading , index } = props;
    const { confirmShipping } = useProfile()
    const handleClick = async (e) =>{
        try{
            e.preventDefault()
            setLoading(true)
            await confirmShipping(index)
            document.getElementById(`confirm_shipping_${index}`).close()
        }catch(err){
            console.log(err)
            toast.error(err.response?.data?.message)
        }finally{
            setLoading(false)
        }
    }
  
  return (
    <dialog id={`confirm_shipping_${index}`} className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg text-center mb-4">
          Are you sure to confirm this shipping
        </h3>
        <div className="flex justify-evenly mt-8">
          <Button bg="green" color="white" onClick={handleClick}>
            Confirm
          </Button>
          <Button
            bg="red"
            onClick={() => document.getElementById(`confirm_shipping_${index}`).close()}
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
