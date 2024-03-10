import { useState } from "react";
import Button from "../../../components/Button";
import Title from "../../../components/Title";
import Description from "./Description";
import { addWatchToInventory } from "../../../apis/profile";
import { toast } from "react-toastify";
import { useRef } from "react";

export default function AddWatchModal(props) {
  const { watch, setLoading } = props;
  const [input, setInput] = useState(null);
  const [mockRadio, setMockRadio] = useState('');
  const [mockCheckbox, setMockCheckBox] = useState({
    box : false,
    certificate : false
  });
  const fileEl = useRef(null)
  const handleCheckbox = (e) => {
    const { name , checked } = e.target
    setMockCheckBox({
      ...mockCheckbox,
      [name] :  checked
    })
  }
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      input.watchId = watch.id;
      if (!input?.watchImage) {
        toast.error("Please Upload Watch Photo");
        return;
      }
      const formData = new FormData();
      formData.append("watchId", watch.id);
      formData.append("watchImage", input.watchImage);
      setLoading(true);
      await addWatchToInventory(formData);
      toast.success("Add Watch To Your Inventory");
      fileEl.current.value=''
      setMockRadio('')
      setMockCheckBox({
        box : false,
        certificate : false
      })
    } catch (err) {
      console.log(err);
      toast.error(err.response?.data?.message);
    } finally {
      document.getElementById("add").close();
      setLoading(false);
    }
  };
  return (
    <dialog id="add" className="modal">
      <div className="modal-box flex flex-col gap-6 min-h-96  max-w-6xl relative ">
        <div
          className="absolute right-5 top-3 text-xl font-bold cursor-pointer"
          onClick={() => {
            document.getElementById("add").close();
            setInput(null);
          }}
        >
          X
        </div>
        <h3 className="font-bold text-lg">Add Watch To Your Inventory</h3>
        <div className="grid grid-cols-2 gap-8">
          <div className="flex gap-8">
            <img src="https://cdn.pixabay.com/photo/2014/07/31/23/00/wristwatch-407096_1280.jpg" />
          </div>
          <div className="flex flex-col gap-4">
            <Title>{watch?.modelName}</Title>
            <div></div>
            <Description label="Brand">{watch?.brand}</Description>
            <Description label="Description">{watch?.description}</Description>
            <div className="flex gap-8 items-center">
              <div>Condition :</div>
              <div className="form-control">
                <label className="label cursor-pointer">
                  <input
                    type="radio"
                    name="radio-10"
                    className="radio checked:bg-black mr-4"
                    value="unworn"
                    checked={mockRadio === "unworn"}
                    onChange={(e) => setMockRadio(e.target.value)}
                  />
                  <span className="label-text">Unworn</span>
                </label>
              </div>
              <div className="form-control">
                <label className="label cursor-pointer ">
                  <input
                    type="radio"
                    name="radio-10"
                    className="radio checked:bg-black mr-4"
                    value="worn"
                    checked={mockRadio === "worn"}
                    onChange={(e) => setMockRadio(e.target.value)}
                  />
                  <span className="label-text">Worn</span>
                </label>
              </div>
            </div>
            <div className="flex gap-8 items-center">
              <div>Equipment :</div>
              <div className="form-control">
                <label className="label cursor-pointer">
                  <input
                    type="checkbox"
                    className="checkbox"
                    name="box"
                    checked={mockCheckbox.box}
                    onChange={handleCheckbox}
                  />
                  <span className="label-text ml-4">Having Box</span>
                </label>
              </div>
              <div className="form-control">
                <label className="label cursor-pointer">
                  <input
                    type="checkbox"
                    className="checkbox"
                    name="certificate"
                    onChange={handleCheckbox}
                    checked={mockCheckbox.certificate}
                  />
                  <span className="label-text ml-4">Watch Certificate</span>
                </label>
              </div>
            </div>
            <div className="flex gap-8 mt-4 items-center">
              <div>Watch Image :</div>
              <input
                type="file"
                className="file-input w-full max-w-xs"
                ref={fileEl}
                onChange={(e) => {
                  if (e.target.files[0]) {
                    setInput({
                      ...input,
                      watchImage: e.target.files[0],
                    });
                  }
                }}
              />
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <Button type="button" color="white" bg="green" onClick={handleSubmit}>
            Add Product To Inventory
          </Button>
        </div>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button onClick={() => setInput(null)}>close</button>
      </form>
    </dialog>
  );
}
