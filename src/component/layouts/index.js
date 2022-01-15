import React from "react";

const Layout = (props) => {
  const { children } = props;

  return (
    <div className="w-full h-screen p-8 overflow-x-hidden bg-grey">
      <div className="mx-auto my-auto flex items-center justify-center w-full h-full">
        <div className="grid grid-cols-2 gap-16">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
