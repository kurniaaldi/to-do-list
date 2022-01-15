import React from "react";
import { Button } from "..";

export default function Modal(props) {
  const { open, close, onOk } = props;
  return (
    <>
      {open ? (
        <>
          <div
            onClick={close}
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
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className="text-lg">Are you sure delete this to do?</p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-center gap-4 p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <Button color="danger" onClick={close}>
                    Cancel
                  </Button>
                  <Button onClick={onOk}>Delete</Button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
