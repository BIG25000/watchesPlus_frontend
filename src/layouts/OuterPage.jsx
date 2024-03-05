import React from "react";
import { Link } from "react-router-dom";

export default function OuterPage({ children }) {
  return (
    <div className="h-screen w-screen bg-cover bg-center bg-[url('../src/assets/outer-bg.jpeg')] ">
      <div className="w-full h-full bg-gradient-to-t from-brown to-transparent bg-cover bg-center flex flex-col justify-center items-center">
        <Link to="/">
          <img src="../src/assets/logo-watchesPlus.png" />
        </Link>
        {children}
      </div>
    </div>
  );
}
