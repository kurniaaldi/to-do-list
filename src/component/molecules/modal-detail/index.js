import { Modal } from "component/atoms";
import React from "react";

const ModalDetail = (props) => {
  const { title, open, close, data } = props;
  console.log(data);
  return (
    <div>
      <Modal title={title} open={open} close={close}>
        <div className="w-80 flex flex-col items-start justify-center gap-4">
          <h5
            className={`${
              data.status === 1 ? "text-success" : "text-warning"
            } text-xl`}
          >
            {data.status ? "Done" : "On Going"}
          </h5>
          <div className="grid grid-cols-3 gap-2 w-full">
            <p className="col-span-1">Title</p>
            <p className="col-span-2">: {data.title}</p>
          </div>
          <div className="grid grid-cols-3 gap-2 w-full">
            <p className="col-span-1">Description</p>
            <p className="col-span-2">: {data.description}</p>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ModalDetail;
