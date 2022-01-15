import React from "react";

export default function Input(props) {
  const {
    dropdown,
    auth,
    background,
    label,
    labelBold = true,
    name,
    placeHolder = "",
    type = "text",
    onChange = () => {},
    value,
    step,
    buttonGroup,
    buttonGroupClick,
    disabled = false,
    onTouched = () => {},
    errorMsg = "",
    max,
    min,
    btnGroupLabel,
    onKeyDown = () => {},
  } = props;

  return (
    <>
      <div className="flex flex-col gap-2 relative w-full">
        {label && (
          <label className={`${labelBold ? "font-bold" : ""}`}>{label}</label>
        )}

        <input
          name={name}
          type={type ? type : "text"}
          value={value}
          step={step}
          className={`
          ${background ? "bg-grey-30 text-xs" : "bg-white "}  
          border px-4  
          ${
            auth
              ? "py-4 rounded-full border-grey-1 text-neutral-800 pl-16"
              : "py-2 rounded-md border-gray"
          } 
          ${dropdown && "pl-8"}`}
          placeholder={placeHolder}
          disabled={disabled}
          onFocus={onTouched}
          onChange={onChange}
          onKeyDown={onKeyDown}
          min={min}
          max={max}
          // autoComplete="off"
        />

        {buttonGroup && (
          <div className="absolute bottom-0 right-0 flex items-center">
            <button
              type="button"
              onClick={buttonGroupClick}
              className="bg-primary rounded-tr-lg rounded-br-lg border border-primary text-white p-2"
            >
              {btnGroupLabel}
            </button>
          </div>
        )}
      </div>
      {errorMsg && (
        <span id="input-error--general" className="text-negative-dark text-xs">
          {errorMsg}
        </span>
      )}
    </>
  );
}
