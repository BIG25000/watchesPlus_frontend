import React, { useState } from "react";
import useAuth from "../../../hooks/useAuth";
import validateLogin from "../validations/validate-login";
import Input from "../../../components/Input";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { User, Lock } from "lucide-react";
import { useNavigate } from "react-router-dom";

const initial = {
  email: "",
  password: "",
};
export default function LoginForm() {
  const [input, setInput] = useState(initial);
  const navigate = useNavigate();

  const { login } = useAuth();
  const hdlChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const hdlSubmit = async (e) => {
    try {
      e.preventDefault();
      const validateErr = validateLogin(input);
      if (validateErr) {
        if (validateErr.email) {
          return toast.error(validateErr.email);
        } else if (validateErr.password) {
          return toast.error(validateErr.password);
        }
      }
      await login(input);
      await navigate("/");
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <div className="flex flex-col">
      <form
        onSubmit={hdlSubmit}
        className="flex flex-col gap-6 items-center justify-center text-white"
      >
        <span className="text-xl">Please enter your email and password</span>
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
          placeholder="Password"
          name="password"
          value={input.password}
          onChange={hdlChangeInput}
        >
          <Lock />
        </Input>
        <Link to="/auth/forgot-password" className="w-full flex justify-end">
          <span className="text-xs font-light">Forgot password?</span>
        </Link>
        <button
          type="submit"
          className="bg-black text-white px-4 py-3 rounded-full my-4 w-[350px] h-[45px]"
        >
          Login
        </button>
      </form>
      <div className="flex justify-center items-center">
        <span className="text-xs font-light">Not a member yet? </span>
        <Link to="/auth/register" className="text-xs font-light text-white">
          Register?
        </Link>
      </div>
    </div>
  );
}
