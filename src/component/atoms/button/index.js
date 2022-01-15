import React from "react";

const DefaultClass =
  "font-semibold justify-center w-28 rounded-full flex items-center gap-2 h-14";

const Button = ({
  children,
  className,
  type = "button",
  onClick,
  color,
  size,
  disabled = false,
}) => {
  const BUTTON_COLOR = {
    primary: "bg-primary text-white",
    "primary-shade": "bg-primary-shade text-white",
    success: "bg-success text-white",
    outline: "bg-white border-2 border-primary text-primary",
  };

  const BUTTON_SIZE = {
    sm: "py-1",
    md: "py-2",
    lg: "py-4",
  };

  const colorClassName = BUTTON_COLOR[color || "primary"];
  const sizeClassName = BUTTON_SIZE[size || "md"];
  return (
    <button
      onClick={onClick}
      type={type}
      className={`${DefaultClass} ${
        disabled ? "bg-neutral-20" : colorClassName
      } ${sizeClassName}  disabled:opacity-50 ${className ? className : ""}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
