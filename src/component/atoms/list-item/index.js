import React, { useState } from "react";
import { Close, Edit } from "../../../assets/icons";

const ListItem = (props) => {
  const {
    data,
    text,
    close = false,
    closeIcon,
    onClose = () => {},
    action = "",
    onEdit = () => {},
    edit = false,
    onClick,
  } = props;
  const [hover, setHover] = useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => {
        if (action !== "hover") {
          onClick(data);
        }
      }}
      className="border rounded-md p-2 flex items-center justify-start gap-2 relative cursor-pointer hover:bg-primary/[0.5]"
    >
      <p className="text-lg truncate" title={text ? text : ""}>
        {text ? text : ""}
      </p>
      {action === "hover"
        ? hover && (
            <div className="absolute rounded-md w-full h-full -m-2 flex items-center justify-center gap-4 ">
              {edit && (
                <div
                  onClick={onEdit}
                  className="cursor-pointer rounded-md bg-white p-2"
                >
                  {closeIcon ? closeIcon : <Edit width="20" height="20" />}
                </div>
              )}
              {close && (
                <div
                  onClick={onClose}
                  className="cursor-pointer rounded-md bg-white p-2"
                >
                  {closeIcon ? (
                    closeIcon
                  ) : (
                    <Close color="#dd524c" width="20" height="20" />
                  )}
                </div>
              )}
            </div>
          )
        : close && (
            <div onClick={onClose} className="cursor-pointer absolute right-1">
              {closeIcon ? closeIcon : <Close />}
            </div>
          )}
    </div>
  );
};

export default ListItem;
