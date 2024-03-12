import React from "react";

export default function Input({
  type,
  placeholder,
  name,
  value,
  onChange,
  children,
  extendClassName,
  onKeyDown,
  inputMode,
  pattern,
  min,
  max,
}) {
  return (
    <div className="relative">
      <div className="absolute left-4 bottom-3 ">{children}</div>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        inputMode={inputMode}
        pattern={pattern}
        min={min}
        max={max}
        onChange={onChange}
        className={`border-white border-2 pl-12 bg-white bg-opacity-0 hover:border-brown hover:placeholder:text-brown text-white placeholder:text-white px-6 w-[350px] h-[45px] rounded-2xl focus:outline-none ${extendClassName}`}
        onKeyDown={onKeyDown}
      />
    </div>
  );
}
