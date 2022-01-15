import React from "react";

export const Close = (props) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M17 3L3 17"
        stroke={props.color ? props.color : "#D6D6D6"}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M3 3L17 17"
        stroke={props.color ? props.color : "#D6D6D6"}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export const Edit = (props) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M8 13.1465H14"
        stroke={props.color ? props.color : "#228DD3"}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M9.88491 3.36289C10.1173 3.13054 10.4324 3 10.761 3C10.9237 3 11.0848 3.03205 11.2351 3.09431C11.3855 3.15658 11.5221 3.24784 11.6371 3.36289C11.7522 3.47794 11.8434 3.61453 11.9057 3.76485C11.968 3.91517 12 4.07629 12 4.23899C12 4.4017 11.968 4.56281 11.9057 4.71314C11.8434 4.86346 11.7522 5.00004 11.6371 5.11509L4.33627 12.4159L2 13L2.58407 10.6637L9.88491 3.36289Z"
        stroke={props.color ? props.color : "#228DD3"}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export const Eye = (props) => {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M14 6.12402C5.25 6.12402 1.75 13.9999 1.75 13.9999C1.75 13.9999 5.25 21.874 14 21.874C22.75 21.874 26.25 13.9999 26.25 13.9999C26.25 13.9999 22.75 6.12402 14 6.12402Z"
        fill={props.color ? props.color : "#3E70B3"}
        stroke={props.color ? props.color : "#3E70B3"}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M14 18.375C16.4162 18.375 18.375 16.4162 18.375 14C18.375 11.5838 16.4162 9.625 14 9.625C11.5838 9.625 9.625 11.5838 9.625 14C9.625 16.4162 11.5838 18.375 14 18.375Z"
        fill={props.color ? props.color : "#3E70B3"}
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
