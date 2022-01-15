import React, { useState } from "react";
import { Close, Edit } from "../../../assets/icons";

const ListItem = (props) => {
  const {
    text,
    close = false,
    closeIcon,
    onClose = () => {},
    action = "",
    onEdit = () => {},
  } = props;
  const [hover, setHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="border rounded-md p-2 flex items-center justify-start gap-2 relative"
    >
      <p className="text-lg truncate" title={text ? text : ""}>
        {text ? text : ""}
      </p>
      {action === "hover"
        ? hover && (
            <div
              onClick={onClose}
              className="absolute rounded-md w-full h-full -m-2 flex items-center justify-center gap-4 bg-black/[0.5]"
            >
              <div
                onClick={onEdit}
                className="cursor-pointer rounded-md bg-white p-2"
              >
                {closeIcon ? closeIcon : <Edit width="20" height="20" />}
              </div>
              <div
                onClick={close}
                className="cursor-pointer rounded-md bg-white p-2"
              >
                {closeIcon ? (
                  closeIcon
                ) : (
                  <Close color="#dd524c" width="20" height="20" />
                )}
              </div>
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
