import React from "react";

const LoadingOverlay = () => {
  return (
    <div
      className="h-screen flex justify-center items-center w-screen fixed top-0 left-0 z-50"
      style={{ backgroundColor: "rgba(152, 162, 179, 0.5)" }}
    >
      <div>
        <div
          className="animate-spin
          rounded-full
          h-16
          w-16
          border-t-2 border-b-2 border-white"
        ></div>
        <p className="text-center mt-4 text-white font-bold">Loading...</p>
      </div>
    </div>
  );
};

export default LoadingOverlay;
