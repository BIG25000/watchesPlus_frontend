import React from "react";

export default function Avatar({ extendClassName, src, exClass }) {
  return (
    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
      <div className={`w-10 rounded-full ${extendClassName}`}>
        <img alt="" src={src} className={exClass} />
      </div>
    </div>
  );
}
