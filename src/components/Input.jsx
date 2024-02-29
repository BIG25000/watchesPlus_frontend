import React from "react";

export default function Input({ type, placeholder, name, value, onChange }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
      className="border-white border-2 bg-white bg-opacity-0 text-lg text-white placeholder:text-white px-6 w-[350px] h-[45px] rounded-2xl focus:outline-none"
    />
  );
}
