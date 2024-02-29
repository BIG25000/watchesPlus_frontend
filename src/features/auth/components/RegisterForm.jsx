import React, { useState } from "react";
import validateRegister from "../validations/validate-register";
import useAuth from "../../../hooks/useAuth";
import Input from "../../../components/Input";
import { toast } from "react-toastify";

const initial = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};
export default function RegisterForm() {
  const [input, setInput] = useState(initial);

  const { register } = useAuth();
  const hdlChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const hdlSubmit = async (e) => {
    try {
      e.preventDefault();
      const validateErr = validateRegister(input);
      if (validateErr) {
        if (validateErr.firstName) {
          return toast.error(validateErr.firstName);
        } else if (validateErr.lastName) {
          return toast.error(validateErr.lastName);
        } else if (validateErr.email) {
          return toast.error(validateErr.email);
        } else if (validateErr.password) {
          return toast.error(validateErr.password);
        } else if (validateErr.confirmPassword) {
          return toast.error(validateErr.confirmPassword);
        }
      }
      await register(input);
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <form
      onSubmit={hdlSubmit}
      className="flex flex-col w-full h-full gap-6 items-center justify-center text-white"
    >
      <span className="text-xl">Please enter your name,email and password</span>
      <Input
        type="text"
        placeholder="First name"
        name="firstName"
        value={input.firstName}
        onChange={hdlChangeInput}
      />
      <Input
        type="text"
        placeholder="Last name"
        name="lastName"
        value={input.lastName}
        onChange={hdlChangeInput}
      />
      <Input
        type="text"
        placeholder="Email"
        name="email"
        value={input.email}
        onChange={hdlChangeInput}
      />
      <Input
        type="password"
        placeholder="Password"
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
        Register
      </button>
    </form>
  );
}
