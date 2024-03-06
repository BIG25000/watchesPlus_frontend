import React from "react";

export default function Description(props) {
  const { label, children } = props;
  return (
    <p>
      <span className="font-bold">{label} :</span> {children}
    </p>
  );
}
