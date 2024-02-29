import React, { useState } from "react";
import useAuth from "../../../hooks/useAuth";
import validateChangePassword from "../validations/validate-changePassword";
import Input from "../../../components/Input";
import { toast } from "react-toastify";

const initial = {
  email: "",
  password: "",
  confirmPassword: "",
};
export default function ChangePasswordForm() {
  const [input, setInput] = useState(initial);

  const { changePassword } = useAuth();
  const hdlChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const hdlSubmit = async (e) => {
    try {
      e.preventDefault();
      const validateErr = validateChangePassword(input);
      if (validateErr) {
        if (validateErr.email) {
          return toast.error(validateErr.email);
        } else if (validateErr.password) {
          return toast.error(validateErr.password);
        } else if (validateErr.confirmPassword) {
          return toast.error(validateErr.confirmPassword);
        }
      }
      await changePassword(input);
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <form
      onSubmit={hdlSubmit}
      className="flex flex-col w-full h-full gap-6 items-center justify-center text-white"
    >
      <span className="text-xl">Please enter your email and new password</span>
      <Input
        type="text"
        placeholder="Email"
        name="email"
        value={input.email}
        onChange={hdlChangeInput}
      />
      <Input
        type="password"
        placeholder="New password"
        name="password"
        value={input.password}
        onChange={hdlChangeInput}
      />
      <Input
        type="password"
        placeholder="Confirm password"
        name="confirmPassword"
        value={input.confirmPassword}
        onChange={hdlChangeInput}
      />
      <button
        type="submit"
        className="bg-black text-white px-4 py-3 rounded-full my-4"
      >
        Change password
      </button>
    </form>
  );
}
