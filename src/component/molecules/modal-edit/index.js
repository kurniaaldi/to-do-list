import { Input, Modal } from "component/atoms";
import React, { useEffect, useState } from "react";

const ModalEdit = (props) => {
  const { title, open, close, data, onSave } = props;
  const [values, setValues] = useState({
    title: "",
    description: "",
  });

  useEffect(() => {
    if (open) {
      setValues({
        ...data,
        title: data.title,
        description: data.description,
      });
    }
  }, [data, open]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setValues({ ...values, [name]: value });
  };
  const handleSave = () => {
    onSave(values);
  };
  return (
    <div>
      <Modal action title={title} open={open} close={close} onSave={handleSave}>
        <div className="w-96 flex flex-col items-start justify-center gap-4">
          <h5
            className={`${
              data.status === 1 ? "text-success" : "text-warning"
            } text-xl`}
          >
            {data.status ? "Done" : "On Going"}
          </h5>
          <div className="grid grid-cols-3 gap-2 w-full items-center">
            <p className="col-span-1">Status</p>
            <div className="col-span-2">
              <Input
                type="checkbox"
                name="status"
                onChange={(e) => {
                  const { checked } = e.target;
                  setValues({ ...values, status: checked ? 1 : 0 });
                }}
                value={values.status}
              />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2 w-full items-center">
            <p className="col-span-1">Title</p>
            <div className="col-span-2">
              <Input
                placeholder="title"
                name="title"
                onChange={handleChange}
                value={values.title}
              />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2 w-full items-center">
            <p className="col-span-1">Description</p>
            <div className="col-span-2">
              <Input
                placeholder="description"
                name="description"
                onChange={handleChange}
                value={values.description}
              />
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ModalEdit;
