import { Close } from "assets/icons";
import React from "react";
import { Button } from "..";

export default function Modal(props) {
  const { open, close, title, action = false, children, onSave } = props;
  return (
    <>
      {open ? (
        <>
          <div
            onClick={() => close(false)}
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none "
          >
            <div
              onClick={(e) => {
                e.stopPropagation();
              }}
              className="relative w-auto my-6 mx-auto max-w-3xl"
            >
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    {title ? title : ""}
                  </h3>
                  <div className="cursor-pointer" onClick={() => close(false)}>
                    <Close />
                  </div>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">{children}</div>
                {/*footer*/}
                {action && (
                  <div className="flex items-center justify-end p-6 border-t gap-4 border-solid border-blueGray-200 rounded-b">
                    <Button color="danger" onClick={() => close(false)}>
                      Close
                    </Button>
                    <Button
                      onClick={() => {
                        onSave();
                        close(false);
                      }}
                    >
                      Save
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
