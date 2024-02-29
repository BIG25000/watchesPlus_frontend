import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { User, Lock } from "lucide-react";

import validateChangePassword from "../validations/validate-changePassword";
import Input from "../../../components/Input";
import useAuth from "../../../hooks/useAuth";

const initial = {
  email: "",
  password: "",
  confirmPassword: "",
};
export default function ChangePasswordForm() {
  const [input, setInput] = useState(initial);
  const { changePassword } = useAuth();
  const navigate = useNavigate();
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
      navigate("/auth/login");
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
      >
        <User />
      </Input>
      <Input
        type="password"
        placeholder="New password"
        name="password"
        value={input.password}
        onChange={hdlChangeInput}
      >
        <Lock />
      </Input>
      <Input
        type="password"
        placeholder="Confirm new password"
        name="confirmPassword"
        value={input.confirmPassword}
        onChange={hdlChangeInput}
      >
        <Lock />
      </Input>
      <button
        type="submit"
        className="bg-black text-white px-4 py-3 rounded-full my-4 w-[350px] h-[45px]"
      >
        Change password
      </button>
    </form>
  );
}
