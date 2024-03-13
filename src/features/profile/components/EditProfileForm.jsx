import React from "react";
import { useState } from "react";
import Button from "../../../components/Button";
import { useRef } from "react";
import { ImageIcon } from "lucide-react";
import { toast } from "react-toastify";
import useProfile from "../../../hooks/useProfile";

const initial = {
  firstName: "",
  lastName: "",
  email: "",
};
export default function EditProfileForm({ setIsEdit }) {
  const [input, setInput] = useState(initial);
  const [image, setImage] = useState(null);

  const { updateProfileInfo } = useProfile();

  const fileInputEl = useRef(null);

  const hdlChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const hdlSubmit = async (e) => {
    try {
      e.preventDefault();
      if (!input.firstName && !input.lastName && !input.email && !image) {
        return toast.error("please enter info or add image");
      }

      const formData = new FormData();
      if (input.firstName) {
        formData.append("firstName", input.firstName);
      }
      if (input.lastName) {
        formData.append("lastName", input.lastName);
      }
      if (input.email) {
        formData.append("email", input.email);
      }
      if (image) {
        formData.append("profileImage", image);
      }

      await updateProfileInfo(formData);
    } catch (err) {
      toast.error(err.response?.data.message);
    } finally {
      setIsEdit(false);
    }
  };
  return (
    <form
      className="w-full flex bg-gray-100 p-4 rounded-xl transition duration-300"
      onSubmit={hdlSubmit}
    >
      <div className="flex-1 p-4 flex flex-col gap-2">
        <label className="flex flex-col gap-2">
          First Name
          <input
            type="text"
            placeholder="First name"
            name="firstName"
            value={input?.firstName}
            onChange={hdlChangeInput}
            className="py-3 px-6 rounded-md text-sm"
          />
        </label>
        <label className="flex flex-col gap-2">
          Last Name
          <input
            type="text"
            placeholder="Last name"
            name="lastName"
            value={input?.lastName}
            onChange={hdlChangeInput}
            className="py-3 px-6 rounded-md text-sm"
          />
        </label>
        <label className="flex flex-col gap-2">
          Email
          <input
            type="text"
            placeholder="Email"
            name="email"
            value={input?.email}
            onChange={hdlChangeInput}
            className="py-3 px-6 rounded-md text-sm"
          />
        </label>
      </div>
      <div className="flex-1 p-4 flex flex-col gap-4 items-center">
        <label className="flex flex-col gap-2">
          Profile Image
          <input
            type="file"
            ref={fileInputEl}
            onChange={(e) => {
              if (e.target.files[0]) {
                setImage(e.target.files[0]);
              }
            }}
            className="hidden"
          />
        </label>

        {image ? (
          <div
            className="flex justify-between items-center"
            onClick={() => fileInputEl.current.click()}
          >
            <img
              src={URL.createObjectURL(image)}
              className="w-32 h-32 rounded-full"
            />
            <button
              className="bg-gray-300 hover:bg-gray-400 h-fit px-4 py-2 rounded-lg"
              onClick={(e) => {
                e.stopPropagation();
                setImage(null);
                fileInputEl.current.value = "";
              }}
            >
              Delete Image
            </button>
          </div>
        ) : (
          <div
            className="w-32 h-32 rounded-full bg-gray-200 hover:bg-gray-300 flex flex-col justify-center items-center"
            role="button"
            onClick={() => fileInputEl.current.click()}
          >
            <div className="h-10 w-10 bg-gray-300 flex justify-center items-center rounded-full">
              <ImageIcon />
            </div>
            <span className="text-xs">Add Photo</span>
          </div>
        )}
        <Button bg="black" color="white" type="submit" width='full'>
          Save
        </Button>
      </div>
    </form>
  );
}
