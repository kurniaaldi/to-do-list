import React from "react";

export default function Card({
  children,
  rounded,
  shadow,
  border,
  padding = true,
}) {
  return (
    <div
      className={`overflow-hidden bg-white h-full ${
        padding ? "p-0 mt-4" : "p-0"
      } ${rounded && "rounded-lg"} ${shadow && "shadow-md"} ${
        border && "border border-gray-300"
      }`}
    >
      {children}
    </div>
  );
}
